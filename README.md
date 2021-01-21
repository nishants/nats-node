# NATS Messaging



- [ ] Can I watch all messages on a nats system ?
- [ ] Is there an async api for nodejs ?



**Neural Autonomic Transport System (NATS)**

- Derek Collison conceived NATS as a messaging platform that functions like a central nervous system.
- maintained by CNCF, community and https://synadia.com/



Properties of NATS

- Extremely lightweight yet performant
- At Most Once and At Least Once Delivery
- Support for Observable and Scalable Services and Event/Data Streams
- Cloud Native, a CNCF project with Kubernetes and Prometheus integrations









Client options : 

```typescript
encoding?: BufferEncoding,
	json?: boolean,
	maxPingOut?: number,
	maxReconnectAttempts?: number,
	name?: string,
	nkey?: string,
	noEcho?: boolean
	noRandomize?: boolean,
	nonceSigner?: Function,
	pass?: string,
	pedantic?: boolean,
	pingInterval?: number,
	preserveBuffers?: boolean,
	reconnect?: boolean,
	reconnectJitter?: number,
	reconnectJitterTLS?: number,
	reconnectDelayHandler?: ()=>number,
	reconnectTimeWait?: number,
	servers?: Array<string>,
	timeout?: number,
	tls?: boolean | tls.TlsOptions,
	token?: string,
	tokenHandler?: ()=>string,
	url?: string,
	useOldRequestStyle?: boolean,
	user?: string,
	userCreds?: string,
	userJWT?: ()=>string | string,
	verbose?: boolean,
	waitOnFirstConnect?: boolean,
	yieldTime?: number
```

