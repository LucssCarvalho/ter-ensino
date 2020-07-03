import 'package:flutter/material.dart';

class SettingsTile extends StatelessWidget {
  final IconData icon;
  final String text;

  SettingsTile(
    this.icon,
    this.text,
  );

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Material(
        color: Colors.white,
        child: InkWell(
          onTap: () {},
          child: Container(
              padding: EdgeInsets.only(left: 15),
              height: 60.0,
              child: Row(
                children: <Widget>[
                  Icon(icon, size: 32, color: Colors.black),
                  SizedBox(
                    width: 18,
                  ),
                  Text(
                    text,
                    style: TextStyle(fontSize: 16.0, color: Colors.black),
                  )
                ],
              )),
        ),
      ),
    );
  }
}
