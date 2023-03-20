# MongoDB setup on mac
- Homebrew tab 등록 & Mongodb설치
```
brew tap mongodb/brew
brew install mongodb-community
```

- Mongodb 시작
```
brew services start mongodb-community
```

- MongoDB shell start
```
mongo
```

- Insert administrator
```
use admin
db.createUser({ user:"root" , pwd:"1234", roles:["root"] })
```

- 