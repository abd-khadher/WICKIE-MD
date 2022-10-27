FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/abd-khadher/WICKIE-MD /root/khadher
WORKDIR /root/khadher/
RUN yarn install --network-concurrency 1
CMD ["node", "lib/client.js"]

