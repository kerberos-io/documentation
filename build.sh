docker build -t kerberos-documentation .
docker tag kerberos-documentation kerberos/kerberos-documentation:1.0
docker push kerberos/kerberos-documentation:1.0
