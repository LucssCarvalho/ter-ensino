import 'package:flutter/material.dart';

class HomeTab extends StatefulWidget {
  @override
  _HomeTabState createState() => _HomeTabState();
}

class _HomeTabState extends State<HomeTab> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        backgroundColor: Colors.grey[900],
        body: TabBarView(children: <Widget>[
          Column(
            children: <Widget>[],
          ),
          Column(
            children: <Widget>[],
          ),
          Column(
            children: <Widget>[],
          ),
        ]),
      ),
    );
  }
}
