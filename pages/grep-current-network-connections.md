---
title: Grep connects by netstat
---

```js
#!/bin/bash
netstat -ant | grep tcp | tr -s ' ' ' ' | awk '{print $6}' | sort | uniq -c
```

### Connections by protocol
```js
#!/bin/bash
netstat -an | grep -E 'tcp|udp' | tr -s ' ' ' ' | awk '{print $1}' | sort | uniq -c
```