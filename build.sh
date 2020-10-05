docker build -t documentation .
docker tag documentation kerberos/documentation:1.0
docker push kerberos/documentation:1.0
