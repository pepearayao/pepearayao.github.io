import subprocess
import time

print("This script will copy the project to the cloud and run it there")
time.sleep(2)

# We ask for the ip address of the remote droplet
REMOTE_SCRAPPER_DROPLET_IP = input("Enter the ip address of the remote web scrapper droplet: ")

#pyperclip.copy("python3 setup_web_scrapper_init.py")
print("Now we will go into the the remote droplet and install docker and run the database and the webscrapper docker")
#print("We will log you in and then you only have to run 'python3 setup_web_scrapper_init.py'")
time.sleep(3)
print("Now we will open the ssh connection to the remote droplet...")
# We copy the setup_init.py file to the remote droplet
print("setup_init.py copied to remote droplet. Connecting to remote droplet...")
time.sleep(3)
subprocess.run(["bash", "-c", "scp setup_web_scrapper_init.py root@%s:." % REMOTE_SCRAPPER_DROPLET_IP])

# Now we open the ssh connection to the remote droplet
subprocess.run(["bash", "-c", "ssh root@%s" % REMOTE_SCRAPPER_DROPLET_IP])

# Now we focus on the droplet for the API
print("Looks like that is working along nice...")
print("Now we will start working on the droplet for the API")
time.sleep(3)
REMOTE_API_DROPLET_IP = input("Enter the ip address of the remote api droplet: ")
#pyperclip.copy("python3 setup_api_init.py")
print("Now we will go int the the remote api droplet and install docker and run the api docker")
print("We will log you in and then you only have to paste to command to start the process. This command has already been saved to your clipboard")
time.sleep(3)
print("Now we will open the ssh connection to the remote droplet...")
# We copy the setup_api_init.py file to the remote droplet
subprocess.run(["bash", "-c", "scp setup_api_init.py root@%s:." % REMOTE_API_DROPLET_IP])