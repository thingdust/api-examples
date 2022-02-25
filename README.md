This repository contains examples of how to use our API.

All examples are connected to the demo instance which is publicly accessible: https://demo.cust.prod.thingdust.io

# Websocket
## Frontscreen Frontscreen
Source: [frontscreen](frontscreen)

Live: [https://thingdust.github.io/api-examples/frontscreen](https://thingdust.github.io/api-examples/frontscreen)

# ReST

Information       | v1 | v3
----------------- | -- | --
occupied status   | x  | x
unoccupied status | x  | x
warm status       |    | x 

```
$ curl --header "X-API-KEY: UEKNEYKACORWF9JMYBGLPOCPIBHNJUHYIAADBRQCEHQM2V7YJUSCVBFUNOWW" https://demo.cust.prod.thingdust.io/api/v1/get_space_states
{
  "Alcove 1.1": "unoccupied",
  "Alcove 1.2": "occupied",
  "Alcove 2.1": "unoccupied"
}
```

```
$ curl --header "X-API-KEY: UEKNEYKACORWF9JMYBGLPOCPIBHNJUHYIAADBRQCEHQM2V7YJUSCVBFUNOWW" https://demo.cust.prod.thingdust.io/api/v3/get_space_states
{
  "Alcove 1.1": {
    "humidity": -1,
    "occupancy": "warm",
    "temperature": -1
  },
  "Alcove 1.2": {
    "humidity": -1,
    "occupancy": "occupied",
    "temperature": -1
  },
  "Alcove 2.1": {
    "humidity": -1,
    "occupancy": "unoccupied",
    "temperature": -1 
  }
}
```

