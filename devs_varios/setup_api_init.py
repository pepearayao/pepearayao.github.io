import subprocess
import time
from .web_scrappers.entremed.entremed.variables import *

# We create the key-pair to download the repository from github
subprocess.run(["bash", "-c", "ssh-keygen"])
subprocess.run(["bash", "-c", "cat /root/.ssh/id_rsa.pub"])
# Now we wait for an input enter from the user to continue
print("\nCopy the key above and paste it in the gitlab repository settings, we'll wait...")
time.sleep(10)
input("\nPress Enter when ready to continue...")

# We clone the repository
subprocess.run(["bash", "-c", "git clone git@gitlab.com:entremed/web_scrappers.git"])

print(("\n\nRepository cloned successfully. Now we will install docker \n\n"))

subprocess.run(['sudo', 'ufw', 'allow', f'{str(HOST_DATABASE_PORT)}'])

# We will install docker now
subprocess.run(["bash", "-c", "apt-get update"])
subprocess.run(["bash", "-c", "sudo apt install -y apt-transport-https ca-certificates curl software-properties-common"])
subprocess.run(["bash", "-c", "sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -"])
subprocess.run(["bash", "-c", "sudo add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable\""])
subprocess.run(["bash", "-c", "apt-cache policy docker-ce"])
subprocess.run(["bash", "-c", "sudo apt install -y docker-ce"])
time.sleep(3)

print(("\n\nDocker installed successfully. Now we will run the database Docker \n\n"))

time.sleep(3)

# Install docker and run postgresql local instance
subprocess.run(["bash", "-c", "docker pull postgres"])
subprocess.run(['docker', 'run', '-itd', '-e', f'POSTGRES_DB={str(DATABASE_ADDRESS["database"])}', '-e', f'POSTGRES_USER={str(DATABASE_ADDRESS["user"])}', '-e', f'POSTGRES_PASSWORD={str(DATABASE_ADDRESS["password"])}', '-p', f'{str(HOST_DATABASE_PORT)}:{str(DOCKER_DATABASE_PORT)}', '--name', 'postgresql', 'postgres'])
time.sleep(3)

print(("\n\nDatabase Docker built and running. Now we build and run Webscrapper Docker \n\n"))

time.sleep(3)

# Install docker for web_parser 
subprocess.run(["bash", "-c", "cd web_scrappers/ && docker build -t web_parser ."])
subprocess.run(["bash", "-c", "docker run -itd --name web_parser_prod web_parser"])

print(("\n\n Webscrapper Docker built and running."))

print("\nNow we are going into the web_parser container: \n\n")
time.sleep(5)
print("\n\nNow this script is comming to an end. Good luck with the project! :)\n\n")
time.sleep(5)
subprocess.run(["bash", "-c", "docker exec -it web_parser_prod bash"])

