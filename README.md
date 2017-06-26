```
docker build -t programmer-challenge .
docker run --name challenge -p 3000:3000 -p 9000:9000 -v $(pwd)/src:/app/src -v $(pwd)/build:/app/build programmer-challenge
docker run -it --name challenge -p 3000:3000 -p 9009:9009 -v $(pwd)/src:/app/src -v $(pwd)/build:/app/build programmer-challenge /bin/bash
docker start -i challenge
```