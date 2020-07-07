import 'package:flutter/material.dart';

class ProfileScreen extends StatefulWidget {
  @override
  _ProfileScreenState createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[900],
      body: Container(
          alignment: Alignment.center,
          child: Column(
            children: <Widget>[
              _userLabel(context),
              _bioProfile(),
              _labelSkills(),
            ],
          )),
    );
  }
}

Widget _userLabel(context) {
  return Stack(
    children: <Widget>[
      Container(
        alignment: AlignmentDirectional.center,
        height: 280,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topRight,
            end: Alignment.bottomLeft,
            colors: [Colors.green, Colors.cyan[800]],
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            _imageProfile(),
            _nameProfile(),
          ],
        ),
      ),
    ],
  );
}

Widget _bioProfile() {
  return Column(
    children: <Widget>[
      Padding(
        padding: const EdgeInsets.only(left: 20.0, right: 20.0, top: 20),
        child: Row(
          children: <Widget>[
            Text(
              'Sobre',
              style: TextStyle(
                color: Colors.grey[50],
                fontSize: 25,
                decoration: TextDecoration.none,
              ),
            ),
          ],
        ),
      ),
      Divider(),
      Padding(
        padding: const EdgeInsets.only(left: 20.0, right: 20),
        child: Container(
          child: Text(
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            style: TextStyle(
              color: Colors.blueGrey[100],
              fontSize: 15,
              decoration: TextDecoration.none,
            ),
          ),
        ),
      ),
    ],
  );
}

Widget _labelSkills() {
  return Column(
    children: <Widget>[
      Padding(
        padding: const EdgeInsets.only(left: 20.0, right: 20.0, top: 20),
        child: Row(
          children: <Widget>[
            Text(
              'Habilidades',
              style: TextStyle(
                color: Colors.grey[50],
                fontSize: 25,
                decoration: TextDecoration.none,
              ),
            ),
          ],
        ),
      ),
      Divider(),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          _chipLabel('Dart', Colors.greenAccent[700]),
          _chipLabel('Flutter', Colors.greenAccent[700]),
          _chipLabel('React', Colors.greenAccent[400]),
        ],
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          _chipLabel('JavaScript', Colors.greenAccent[400]),
          _chipLabel('HTML + CSS', Colors.greenAccent[400]),
          _chipLabel('C#', Colors.greenAccent[100]),
        ],
      ),
      Column(
        children: <Widget>[],
      ),
    ],
  );
}

Widget _chipLabel(String labelName, Color colorData) {
  return Padding(
    padding: const EdgeInsets.all(8.0),
    child: Chip(
      label: Text(labelName),
      backgroundColor: colorData,
    ),
  );
}

Widget _imageProfile() {
  return Padding(
    padding: const EdgeInsets.only(top: 10.0),
    child: CircleAvatar(
      backgroundColor: Colors.white,
      radius: 70.0,
      child: Container(
        width: 190.0,
        height: 190.0,
        decoration: new BoxDecoration(
          shape: BoxShape.circle,
          image: new DecorationImage(
            fit: BoxFit.fill,
            image: AssetImage('assets/images/img_default_profile.jpg'),
          ),
        ),
      ),
    ),
  );
}

Widget _nameProfile() {
  return Padding(
    padding: const EdgeInsets.all(8.0),
    child: Container(
      child: Text(
        'Lucas Carvalho',
        style: TextStyle(
            color: Colors.white, fontSize: 25, decoration: TextDecoration.none),
      ),
    ),
  );
}
