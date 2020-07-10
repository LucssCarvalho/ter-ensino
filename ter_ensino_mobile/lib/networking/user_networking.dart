import 'dart:convert';
import 'dart:io';
import 'package:ter_ensino_mobile/domain/user/token.dart';
import 'package:ter_ensino_mobile/domain/user/user.dart';
import 'package:http/http.dart' as http;
import 'appSettings.dart';

class UserNetworking {
  var url = AppSettings().url;

  Future<User> getToken(String username, String password) async {
    var header = {"Content-Type": "application/json"};
    var params = {
      "login": username,
      "senha": password,
    };
    var body = json.encode(params);

    var response = await http.post('$url/signin', headers: header, body: body);
    if (response == null) return null;

    switch (response.statusCode) {
      case 200:
        var token = Token.fromJson(json.decode(response.body));
        var user = await login(token);
        return user;
      case 400:
        return null;
      default:
        return null;
    }
  }

  Future<User> login(Token token) async {
    var response = await http.get(
      '$url/user',
      headers: {HttpHeaders.authorizationHeader: token.token},
    );

    if (response == null) return null;

    switch (response.statusCode) {
      case 200:
        var user = User.fromJson(json.decode(response.body));
        return user;
      case 400:
        return null;
      default:
        return null;
    }
  }
}
