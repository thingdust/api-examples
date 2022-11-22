This repository contains examples of how to use our API.

All examples are connected to the demo instance which is publicly accessible: https://demo.cust.prod.thingdust.io

# Live data

## Websocket
### Frontscreen Example
Source: [frontscreen](frontscreen)
Live: [https://thingdust.github.io/api-examples/frontscreen](https://thingdust.github.io/api-examples/frontscreen)

## ReST

Information       | v1 | v3
----------------- | -- | --
occupied status   | x  | x
unoccupied status | x  | x
warm status       |    | x 

```sh
$ curl --header "X-API-KEY: UEKNEYKACORWF9JMYBGLPOCPIBHNJUHYIAADBRQCEHQM2V7YJUSCVBFUNOWW" https://demo.cust.prod.thingdust.io/api/v1/get_space_states
{
  "Alcove 1.1": "unoccupied",
  "Alcove 1.2": "occupied",
  "Alcove 2.1": "unoccupied"
}
```

```sh
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

# historic data

```sh
$ curl --header "X-API-KEY: UEKNEYKACORWF9JMYBGLPOCPIBHNJUHYIAADBRQCEHQM2V7YJUSCVBFUNOWW" --header "X-FROM: 2022-11-19" --header "X-TO: 2022-11-20" https://demo.cust.prod.thingdust.io/api/v3/space_usage
Timestamp;Space X;Space Y;Space Z
2022-11-19T00:00:00+01:00;10;20;n/a;30
2022-11-19T01:00:00+01:10;20;30;n/a;35
2022-11-19T02:00:00+01:20;30;40;n/a;40
[snip]
```
