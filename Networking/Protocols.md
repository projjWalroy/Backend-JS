#Ports: 
    ##Any machine could be runnning many network apps in order to distinguish that apps for recive message we use ports. (port number)
Ip-address + port = socket

port helps you to get the pacet to specific process on the host

Every process has a 16 bit port number. 
range of port number -> 0- 2(16)/05535

0-1023 -> well known ports
80 -> http
443 -> https

1024 - 49152 -> Register Ports

They are used by specific potentially properitary apps/process that are known but not system defined.

Sql server -> 1493
mongoDb -> 27017

49152 - 65535 -> dynamic port
for future purpose

