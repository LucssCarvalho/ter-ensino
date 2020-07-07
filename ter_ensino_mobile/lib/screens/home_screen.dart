import 'package:flutter/material.dart';
import 'package:ter_ensino_mobile/widgets/custom_drawer.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        body: DefaultTabController(
          length: 3,
          child: Scaffold(
            appBar: AppBar(
              actions: <Widget>[
                IconButton(
                  icon: Icon(Icons.rate_review),
                  onPressed: () {},
                )
              ],
              title: Text(
                '#terEnsino',
              ),
              centerTitle: true,
              backgroundColor: Colors.black,
              bottom: TabBar(tabs: [
                Tab(
                  child: Text(
                    "Programação",
                    style: TextStyle(color: Colors.green),
                  ),
                ),
                Tab(
                  child: Text(
                    "Leitura",
                    style: TextStyle(color: Colors.green),
                  ),
                ),
                Tab(
                  child: Text(
                    "Excel",
                    style: TextStyle(color: Colors.green),
                  ),
                ),
              ]),
            ),
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
        ),
      ),
    );
  }
}
