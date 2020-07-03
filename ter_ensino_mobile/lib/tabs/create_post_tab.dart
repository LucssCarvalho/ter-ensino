import 'package:flutter/material.dart';
import 'package:ter_ensino_mobile/widgets/custom_drawer.dart';

class CreatePostTab extends StatefulWidget {
  PageController pageController;

  CreatePostTab(this.pageController);
  @override
  _CreatePostTabState createState() => _CreatePostTabState();
}

class _CreatePostTabState extends State<CreatePostTab> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: CustomDrawer(widget.pageController),
      appBar: AppBar(
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.home),
            onPressed: () {
              Navigator.pop(context);
            },
          )
        ],
        backgroundColor: Colors.black,
        title: Text(
          'Escrever conhecimento',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
      ),
      backgroundColor: Colors.grey[900],
      body: Container(
        child: Column(
          children: <Widget>[
            Container(
              height: 50,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(50),
              ),
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    Icon(Icons.person_outline),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          'Lucas Carvalho',
                          style: TextStyle(fontSize: 15),
                        ),
                        Text('aprendiz em tempo integral')
                      ],
                    )
                  ],
                ),
              ),
            ),
            Form(
              child: Column(
                children: <Widget>[],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
