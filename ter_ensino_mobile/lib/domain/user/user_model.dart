import 'package:scoped_model/scoped_model.dart';
import 'package:ter_ensino_mobile/domain/user/user.dart';
import 'package:ter_ensino_mobile/networking/user_networking.dart';

class UserModel extends Model {
  User user;
  bool isLogged = false;

  Future<User> signIn(
      context, String email, String password, bool stayconnected) async {
    // user = await UserNetworking(context).login(email, password);

    if (user != null) {
      isLogged = true;
      notifyListeners();

      return user;
    }
    return user = null;
  }

  void signOut(context) async {
    user = null;
    isLogged = false;

    notifyListeners();
  }
}
