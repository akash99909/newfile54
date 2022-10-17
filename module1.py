from flask import Flask,render_template,request
import mysql.connector
import re



app = Flask(__name__)



conn = mysql.connector.connect(user='akash', password='password',host='localhost',database='de_accelerator',auth_plugin='mysql_native_password')
if conn:
    print ("Connected Successfully")
else:
    print ("Connection Not Established")


cursor = conn.cursor(buffered=True)

@app.route("/")
def first():
    return render_template('basepage.html')



@app.route('/login')
def loginpage():
    return render_template('login.html',msg = '')
@app.route('/index')
def indexpage():
    return render_template('index.html')

@app.route('/clusterestimation')
def clusterestimation():
    return render_template('page2.html')

@app.route('/login', methods =['GET', 'POST'])
def login():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        username = request.form['username']
        password = request.form['password']
        print(username,password)
        sql = 'SELECT * FROM accounts WHERE username = %s AND password = %s'
        val = (username,password)
        cursor.execute(sql,val)
        account = cursor.fetchone()
        if account:
            msg = 'Logged in successfully !'
            return render_template('index.html', msg = msg)
        else:
            msg = 'Incorrect username / password !'
    return render_template('login.html', msg = msg)



@app.route('/logout')
def logout():
    return redirect(url_for('login'))



@app.route('/register', methods =['GET', 'POST'])
def register():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form and 'email' in request.form :
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        sql = 'SELECT * FROM accounts WHERE username = %s'
        val = (username,)
        cursor.execute(sql,val)
        account = cursor.fetchone()
        if account:
            msg = 'Account already exists !'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = 'Invalid email address !'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Username must contain only characters and numbers !'
        elif not username or not password or not email:
            msg = 'Please fill out the form !'
        else:
            sql1 = 'INSERT INTO accounts(username,password,email) VALUES (%s,%s,%s)'
            val1 = (username,password,email)
            cursor.execute(sql1,val1)
            conn.commit()
            msg = 'You have successfully registered !'
    elif request.method == 'POST':
        msg = 'Please fill out the form !'
    return render_template('register.html', msg = msg)




@app.route('/form')
def form():
    return render_template('HTMLPage1.html')
@app.route('/form',methods=['POST', 'GET'])
def getData():
    s1 =  request.form.getlist('sen1[]')
    s2 =  request.form.getlist('sen2[]')
    s3 =  request.form.getlist('sen3[]')
    s4 =  request.form.getlist('sen4[]')
    s5 =  request.form.getlist('sen5[]')
    s6 =  request.form.getlist('sen6[]')
    s7 =  request.form.getlist('sen7[]')
    s8 =  request.form.getlist('sen8[]')
    s9 =  request.form.getlist('sen9[]')
    s10=  request.form.getlist('sen10[]')
    s11=  request.form.getlist('sen11[]')
    s12=  request.form.getlist('sen12[]')



    count = 0
    for i in range(len(s1)):
        sql = "INSERT INTO de_accelerator (s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        val = (s1[i],s2[i],s3[i],s4[i],s5[i],s6[i],s7[i],s8[i],s9[i],s10[i],s11[i],s12[i])
        cursor.execute(sql,val)
        conn.commit()
        count += 1



        sql2 = "SELECT s11 from de_accelerator order by f1 desc"
        cursor.execute(sql2)
        rows = cursor.fetchmany(count)
        sum = 0
        if rows:
            for row in rows:
                if row[0] == "":
                    continue
                sum = sum + int(row[0])
        print(sum)
        sql3="SELECT s12 from de_accelerator order by f1 desc"
        rows = cursor.fetchmany(count)





    return render_template('HTMLPage1.html',sum = sum,per = 0)



@app.route('/form1',methods=['POST', 'GET'])
def calculate():
    data = request.form['per']
    data1 =  request.form['sum']
    print(data)
    value = (int(data) * int(data1))/100
    return render_template('HTMLPage1.html',sum = data1,per = value)



app.run(host='localhost', port=5000, debug = True)