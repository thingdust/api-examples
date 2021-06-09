This repository contains examples of how to use our API.

All examples are connected to the demo instance which is publicly accessible: https://demo.cust.prod.thingdust.io

# Websocket
## Frontscreen Frontscreen
Source: [frontscreen](frontscreen)

Live: [https://thingdust.github.io/api-examples/frontscreen](https://thingdust.github.io/api-examples/frontscreen)

# ReST

Information       | v1 | v2 | v3
----------------- | -- | -- | --
occupied status   | x  | x  | x
unoccupied status | x  | x  | x
warm status       |    |    | x 
humidity          |    | x  | x 
temperature       |    | x  | x

```
$ curl --header "X-API-KEY: UEKNEYKACORWF9JMYBGLPOCPIBHNJUHYIAADBRQCEHQM2V7YJUSCVBFUNOWW" https://demo.cust.prod.thingdust.io/api/v1/get_space_states
{
  "Alcove 1.1": "unoccupied",
  "Alcove 1.2": "occupied",
  "Alcove 2.1": "unoccupied"
}
```

```
$ curl --header "X-API-KEY: UEKNEYKACORWF9JMYBGLPOCPIBHNJUHYIAADBRQCEHQM2V7YJUSCVBFUNOWW" https://demo.cust.prod.thingdust.io/api/v2/get_space_states
{
  "Alcove 1.1": {
    "humidity": 53.333333333333336,
    "occupancy": "unoccupied",
    "temperature": 23.8
  },
    "Alcove 1.2": {
    "humidity": 54.666666666666664,
    "occupancy": "occupied",
    "temperature": 24.4
  },
    "Alcove 2.1": {
    "humidity": 49.333333333333336,
    "occupancy": "unoccupied",
    "temperature": 24.8
  }
}
```

```
$ curl --header "X-API-KEY: UEKNEYKACORWF9JMYBGLPOCPIBHNJUHYIAADBRQCEHQM2V7YJUSCVBFUNOWW" https://demo.cust.prod.thingdust.io/api/v3/get_space_states
{
  "Alcove 1.1": {
    "humidity": 53.333333333333336,
    "occupancy": "warm",
    "temperature": 23.8
  },
  "Alcove 1.2": {
    "humidity": 54.666666666666664,
    "occupancy": "occupied",
    "temperature": 24.4
  },
  "Alcove 2.1": {
    "humidity": 49.333333333333336,
    "occupancy": "unoccupied",
    "temperature": 24.8
  }
}
```

