import 'package:flutter/material.dart';
import 'package:scoped_model/scoped_model.dart';
import 'package:ter_ensino_mobile/screens/home_screen.dart';
import 'package:ter_ensino_mobile/screens/login_screen.dart';
import 'package:ter_ensino_mobile/screens/profile_screen.dart';
import 'package:ter_ensino_mobile/screens/settings_screen.dart';

import 'domain/user/user_model.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ScopedModel<UserModel>(
      model: UserModel(),
      child: MaterialApp(
        title: 'TerEnsino',
        theme: ThemeData(
          primarySwatch: Colors.green,
        ),
        debugShowCheckedModeBanner: false,
        initialRoute: '/loginScreen',
        navigatorObservers: [],
        routes: {
          '/': (context) => ScopedModelDescendant<UserModel>(
                builder: (context, child, model) {
                  return LoginScreen();
                },
              ),
          '/home': (context) => ScopedModelDescendant<UserModel>(
                builder: (context, child, model) {
                  return _getNextScreen(HomeScreen(), model);
                },
              ),
          '/profileScreen': (context) => ScopedModelDescendant<UserModel>(
                builder: (context, child, model) {
                  return _getNextScreen(ProfileScreen(), model);
                },
              ),
          '/settingsScreen': (context) => ScopedModelDescendant<UserModel>(
                builder: (context, child, model) {
                  return _getNextScreen(SettingsScreen(), model);
                },
              ),
        },
      ),
    );
  }

  Widget _getNextScreen(Widget screen, UserModel userModel) {
    return userModel.isLogged ? screen : LoginScreen();
  }
}
