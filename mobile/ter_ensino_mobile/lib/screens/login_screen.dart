import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Expanded(
          child: Image.asset(
            'assets/images/background_auth.jpg',
            height: 100.0,
            width: 160,
          ),
        ),
      ),
    );
  }
}
