import os
from flask import Flask, render_template,jsonify,request
from flask_socketio import SocketIO, emit
from flask_session import Session
app = Flask(__name__)
socketio =SocketIO(app)
app.config["SESSION_PERMANENT"] = True
app.config["SESSION_TYPE"] = "filesystem"

Session(app)
users = []
groups = []
@app.route("/")
def home():
    return render_template("home.html", flag = False)

@app.route("/register", methods=["GET", "POST"])
def register():
    display_name = request.form.get("display_name")
    if display_name not in users:
        users.append(display_name)
        return render_template("chat.html", display_name = display_name)
    else:
        return render_template("home.html", flag = True)

@socket.on("connect")
def load_page():
    emit ('load_page',{"groups":groups}, broadcast = True)

@socket.on("submit group")
def submit_group():
