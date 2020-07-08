class User {
  User({this.id, this.name, this.email, this.title, this.about, this.imageURL});

  final int id;
  final int name;
  final String email;
  final String title;
  final String about;
  final String imageURL;

  String acceptanceTermDate;
  String lastAccess;
  String cookie;
  DateTime cookieExpireDate;
}
