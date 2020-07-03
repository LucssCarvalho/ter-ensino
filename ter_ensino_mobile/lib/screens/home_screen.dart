import 'package:flutter/material.dart';
import 'package:ter_ensino_mobile/tabs/create_post_tab.dart';
import 'package:ter_ensino_mobile/tabs/home_tab.dart';
import 'package:ter_ensino_mobile/tabs/profile_tab.dart';
import 'package:ter_ensino_mobile/tabs/settings_tab.dart';
import 'package:ter_ensino_mobile/widgets/custom_drawer.dart';

class HomeScreen extends StatelessWidget {
  final _pageController = PageController();

  @override
  Widget build(BuildContext context) {
    return PageView(
      controller: _pageController,
      physics: NeverScrollableScrollPhysics(),
      children: <Widget>[
        DefaultTabController(
          length: 3,
          child: Scaffold(
            body: HomeTab(),
            drawer: CustomDrawer(_pageController),
            appBar: AppBar(
              actions: <Widget>[
                IconButton(
                  icon: Icon(Icons.rate_review),
                  onPressed: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (context) => CreatePostTab(_pageController),
                      ),
                    );
                  },
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
          ),
        ),
        Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.black,
            title: Text(
              'Perfil',
              style: TextStyle(color: Colors.white),
            ),
            centerTitle: true,
          ),
          drawer: CustomDrawer(_pageController),
          body: ProfileTab(),
        ),
        Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.black,
            title: Text(
              'Configurações',
              style: TextStyle(color: Colors.white),
            ),
            centerTitle: true,
          ),
          drawer: CustomDrawer(_pageController),
          body: SettingsTab(),
        ),
      ],
    );
  }
}
