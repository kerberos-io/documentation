docker build -t documentation .
docker tag documentation kerberos/documentation:1.10
docker push kerberos/documentation:1.10
