import 'package:flutter/material.dart';
import 'package:ter_ensino_mobile/tiles/drawer_tile.dart';

class CustomDrawer extends StatelessWidget {
  final PageController pageController;

  CustomDrawer(this.pageController);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Stack(
        children: <Widget>[
          ListView(
            children: <Widget>[
              Column(
                children: <Widget>[
                  Container(
                    color: Colors.blueGrey[50],
                    margin: EdgeInsets.only(bottom: 10),
                    padding: EdgeInsets.fromLTRB(30.0, 30, 18, 0),
                    height: 170,
                    child: Stack(
                      children: <Widget>[
                        Positioned(
                          top: 20,
                          left: 0,
                          child: Row(
                            children: <Widget>[
                              Text(
                                '#terENSINO',
                                style: TextStyle(
                                    fontSize: 35,
                                    fontWeight: FontWeight.bold,
                                    color: Colors.green),
                              ),
                            ],
                          ),
                        ),
                        Positioned(
                          left: 0.0,
                          bottom: 0.0,
                          child: Column(
                            children: <Widget>[
                              Text(
                                'Olá, Lucas Carvalho',
                                style: TextStyle(
                                    fontSize: 18, fontWeight: FontWeight.bold),
                              ),
                              SizedBox(
                                height: 15,
                              )
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Column(
                    children: <Widget>[
                      DrawerTile(Icons.home, "Início", pageController, 0),
                      DrawerTile(Icons.person, "Perfil", pageController, 1),
                      DrawerTile(
                          Icons.settings, "Configurações", pageController, 2),
                    ],
                  ),
                ],
              ),
            ],
          )
        ],
      ),
    );
  }
}
