---
title: Grep connects by netstat
---

```
#!/bin/bash
netstat -ant | grep tcp | tr -s ' ' ' ' | awk '{print $6}' | sort | uniq -c
```