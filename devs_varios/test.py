import subprocess
#Variables declaration
LOCAL_DATABASE = "entremed_local"
LOCAL_DATABASE_USER = "entremeduser"
LOCAL_DATABASE_PASSWORD = "passwordUltraDificil1234%&"
LOCAL_DATABASE_PORT = "25060"

LOCAL_DATABASE_ADDRESS = {
    "host": None,
    "database": LOCAL_DATABASE,
    "user": LOCAL_DATABASE_USER,
    "password": LOCAL_DATABASE_PASSWORD,
    "port": LOCAL_DATABASE_PORT 
}

subprocess.run(["bash", "-c", "docker pull postgres"])
subprocess.run(['docker', 'run', '-itd', '-e', f'POSTGRES_DB={str(LOCAL_DATABASE)}', '-e', f'POSTGRES_USER={str(LOCAL_DATABASE_USER)}', '-e', f'POSTGRES_PASSWORD={str(LOCAL_DATABASE_PASSWORD)}', '-p', f'{str(LOCAL_DATABASE_PORT)}:{str(LOCAL_DATABASE_PORT)}', '--name', 'postgresql', 'postgres'])

"""
docker run -itd -e POSTGRES_DB=entremed_local -e POSTGRES_USER=entremeduser -e POSTGRES_PASSWORD=passwordUltraDificil1234%& -p 5455:5432 --name postgresql postgres
"""

docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' postgresql
conn = psycopg2.connect(host="172.17.0.2",database="entremed_local", user="entremeduser", password="passwordUltraDificil1234%&", port="25060")
conn = psycopg2.connect(host="172.17.0.2",database="pepe", user="pepe", password="pepe", port="5433")