docker build -t documentation .
docker tag documentation kerberos/documentation:1.7
docker push kerberos/documentation:1.7
