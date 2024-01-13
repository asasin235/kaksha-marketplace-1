import { createClient } from 'redis';

const client = createClient({
    password: 'DAQ0FM6wmU1wZytrziVo64TLf0fBfRBC',
    socket: {
        host: 'redis-15971.c322.us-east-1-2.ec2.cloud.redislabs.com',
        port: 15971
    }
});


export default client;