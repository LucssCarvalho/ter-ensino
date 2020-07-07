import 'package:flutter/material.dart';

class DrawerTile extends StatelessWidget {
  final IconData icon;
  final String text;
  final String route;

  DrawerTile(
    this.icon,
    this.text,
    this.route,
  );

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
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
                  style: TextStyle(
                    fontSize: 16.0,
                    color: Colors.black,
                  ),
                )
              ],
            )),
      ),
    );
  }
}
