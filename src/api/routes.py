"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.models import db, Habit 
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/login', methods=['POST'])
def handle_login(): 
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    user = User.query.filter_by(email=email, password=password).first()
    
    if user is None:
        return jsonify({"msg":"Email o contraseña incorrectas"}), 401
    
    access_token = create_access_token(identity=str(user.id))
    return jsonify({"token": access_token, "user_id": user.id}), 200

@api.route('/hello', methods=['GET'])
def handle_hello():

    response_body = {
        "message": "Backend conectado"
    }

    return jsonify(response_body), 200



@api.route('/habits', methods=['POST'])
def handle_create_habit():
    body = request.get_json()
    
    new_habit = Habit(
        name=body['name'],
        description=body.get('description', ""), 
        is_active=True
    )
    db.session.add(new_habit)
    db.session.commit()
   
    return jsonify(new_habit.serialize()), 201

 