
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:9
My Partner's Key:8

Our initial shared key:17

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message       | Decoded Message        | Key |
| ------------------    | ---------------------  | --- |
|Yvp Sif!               |hey bro!                | 17  |
|Si, Biq qum siol xus   |yo, how was your day?   | 6   |
|Fnnc, Gnv vzr xntqr?   |good, how was yours?    | 25  |
|iu zwu sajp nawhhu sihh|my day went really well | 4   |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:MTl9rb

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 01001101 01010100 00110001 00111001 01110010 01100010

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Jack
    Destination: Jacques  
    Sequence: 1/3
    Data: 01001101 01010100
    =========
    Packet 2:

    Source: Jack
    Destination: Jacques
    Sequence: 2/3 
    Data: 00110001 00111001
    =========
    Packet 3:

    Source: Jack
    Destination: Jacques
    Sequence: 3/3
    Data: 01110010 01100010
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation? The difference between symmetric and asymmetric are that symmetric are stuff that me and my partner can both see and asymmectric are stuff that only I can see. Some form of us doing this is for asymmetric were the messages we were sending each other that had encrypted and they had to decrypt and for symmetric were the keys that we used for the encryption so that we both know how to decrypt it. 
- Why is it important that this protocol uses a new key for each message? It s important because that no one can find out the messages we sent each other and were the only ones with the keys.
- Why is it important that you never share your secret key? its important that we dont share the keys with anyone is because we don't want any one else to find put are secert messages and if we share these keys people can figure out are messages
- In the transport layer, do these messages use TCP or UDP? Why? the messages uses TCP because there is enough time so that they can resend the message if it got lost instead just pushing through with a missing packet  
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer. In the internet layer its about delivery across networks and adds IP addresses and makes a route and may spilt the packets. For the Link layer it handles the packets and gets from one device to the other like it adds a source and a destinations for these packets 
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see? Some things that person in the middle can see is who is talking to who like who am i sending the messge too and how long the message is they could also see the protocol that the messages are being sent in other then that they can't see anything else.
