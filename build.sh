docker build -t documentation .
docker tag documentation kerberos/documentation:1.9
docker push kerberos/documentation:1.9
