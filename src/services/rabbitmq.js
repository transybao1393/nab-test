import amqp from 'amqplib/callback_api';
import config from '../config.json';

let publishMessage = (jsonData) => {
    console.log('[*] RabbitMQ URI...', config.RABBITMQ_URI);
    amqp.connect(config.RABBITMQ_URI, function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = 'daily.customer.activities';

            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(jsonData)));

            console.log("[x] Sent %s", jsonData);
        });
    });
};

let consumeMessage = () => {
    amqp.connect(config.RABBITMQ_URI, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'daily.customer.activities';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log("[*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            let JSONDataReceived = JSON.parse(msg.content);
            console.log("[x] Received json %s", JSONDataReceived);
        }, {
            noAck: true
        });
    });
});
};

export {
    publishMessage,
    consumeMessage
};
