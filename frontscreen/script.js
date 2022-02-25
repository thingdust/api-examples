const api_key = 'UEKNEYKACORWF9JMYBGLPOCPIBHNJUHYIAADBRQCEHQM2V7YJUSCVBFUNOWW';
const instance = 'demo.cust.prod.thingdust.io';

function normalize_name(space_name) {
    return space_name.replace(/[^a-zA-Z0-9]/g, '_');
}

function on_state_update(state) {
    const spaces = Object.entries(state);
    const free_spaces = spaces.filter(([_, space]) => space.occupancy === 'unoccupied').length;

    document.getElementById('free_spaces').innerText = `${free_spaces}`;
    document.getElementById('map_style').innerText = spaces
        .map(([name, space]) => {
            const class_name = `___SPACE___Space_${normalize_name(name)}`;

            const color = (() => {
                switch (space.occupancy) {
                    case 'unoccupied':
                        return 'green';
                    case 'occupied':
                        return 'lightred';
                    case 'unknown':
                        return 'gray';
                    case 'warm':
                        return 'yellow';
                }
            })();
            return `.${class_name} { fill: ${color}; }`;
        })
        .join('\n');
}

function connect() {
    const state = {};
    const ws = new WebSocket(`wss://${instance}/api/v1/space_state_stream`);

    ws.onopen = () => {
        console.log(`open -> send auth`);
        const message = JSON.stringify({
            msg: 'auth_request',
            supported_versions: [3],
            data: {
                apikey: api_key,
            },
        });
        ws.send(message);
    };

    ws.onclose = () => {
        console.log(`reconnect`);
        setTimeout(connect, 2000);
    };

    ws.onmessage = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            const data = reader.result;
            const msg = JSON.parse(data);
            if (msg.msg === 'auth_response') {
                if (msg.data !== 'success') {
                    console.log('auth failed');
                    ws.close();
                }
            }
            if (msg.msg === 'update') {
                for (const [space_name, entry] of Object.entries(msg.data)) {
                    state[space_name] = entry;
                }
                on_state_update(state);
            }
        };
        reader.readAsText(e.data);
    };
}
connect();
