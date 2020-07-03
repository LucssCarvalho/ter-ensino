import 'package:flutter/material.dart';

class ProfileTab extends StatefulWidget {
  @override
  _ProfileTabState createState() => _ProfileTabState();
}

class _ProfileTabState extends State<ProfileTab> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[900],
      body: Container(
          alignment: Alignment.center,
          child: Column(
            children: <Widget>[banner(context), _bioProfile(), skills()],
          )),
    );
  }
}

Widget banner(context) {
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
              'About Lucas',
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

Widget skills() {
  return Column(
    children: <Widget>[
      Padding(
        padding: const EdgeInsets.only(left: 20.0, right: 20.0, top: 20),
        child: Row(
          children: <Widget>[
            Text(
              'Skills',
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
          chipLabel('Dart', Colors.greenAccent[700]),
          chipLabel('Flutter', Colors.greenAccent[700]),
          chipLabel('React', Colors.greenAccent[400]),
        ],
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          chipLabel('JavaScript', Colors.greenAccent[400]),
          chipLabel('HTML + CSS', Colors.greenAccent[400]),
          chipLabel('C#', Colors.greenAccent[100]),
        ],
      ),
      Column(
        children: <Widget>[],
      ),
    ],
  );
}

Widget chipLabel(String labelName, Color colorData) {
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
            image: AssetImage('assets/images/image.jpg'),
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
