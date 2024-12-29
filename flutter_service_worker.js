'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a3e9d09c106f49dcdae77d5a5d02ebae",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "998ef681d3e0e02a2b58635de1c74f3d",
"/": "998ef681d3e0e02a2b58635de1c74f3d",
"mp_logo.png": "e02b05faff78c535220b6b9254a30e0f",
"main.dart.js": "e78a25f77afbb61344e558744d44238a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "a3ac378dd9ce078de02ce8ef8eaab3dd",
"icons/Icon-192.png": "469cd3d638519a8a7bae9c681130d460",
"icons/Icon-maskable-192.png": "469cd3d638519a8a7bae9c681130d460",
"icons/Icon-maskable-512.png": "852f2d02b3bea7631a0df470fe060115",
"icons/Icon-512.png": "852f2d02b3bea7631a0df470fe060115",
"manifest.json": "7d48b8890d62d78d149eeb0e5c37a975",
".git/config": "7fe3acfde6ac535a12470f6aebd45f0c",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3e/720f3eb1b954c6248d64a951b20b82dfac9a63": "d7e9e0de66915fac32c8ed33af324c92",
".git/objects/50/dc0e3bb6b16eb776953f6018424b9579c02291": "24656fba11d10f3fd4984e87441f76d1",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/58/fa175b563ef12256e211fc0e9a400b2a426ef5": "3adf5941947098575b50fb17aa3160d4",
".git/objects/0b/b6ebc87b09fd12739db6538d23a6c97d37a045": "d1994c680beee378213b31958f0aba27",
".git/objects/0e/70c650ee38cb38ff38c8ff1397821e89644abc": "ea49bb4011dfe828240b459690f583f1",
".git/objects/34/974f896a4b45e0bdbb2014133efcb747d019b5": "e764598d5c78f63cb4de126b8270874d",
".git/objects/9c/48e05a24fa2267e207ecf17560291b5621c197": "a13c22bd1a9374d0763fc0ca6b07341d",
".git/objects/b2/c393364daf52349cd48229bc361a4ee93259b2": "43930c81962c770b830cbe554b8cc9f0",
".git/objects/d9/6d432fd1ce5efc4e6c823869c54755a91d7e66": "2bea66545088b7afe7cce5234c37fc90",
".git/objects/d9/36493de01b1c6c7cd3ba91a1e8a8f30a822689": "9426953159939b83a52609a672e2925d",
".git/objects/ac/0bdc45a6e5d41d1ec92f5f75bbf74777088f73": "66b608af71facdf5c8bd360e346142a2",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/bb/47ec8abfca13df89d35bc8d20a4b7ce84701d6": "bb9ee5c5ffe0501c672d585135a6fec9",
".git/objects/bb/e91f544f29750d5aeb215431e7619c0c3f1b69": "e723474482da2c9ed1f56417ca2b3948",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a5/f645b6e12582b87439eaba68b5da97aa32d62f": "fdfd31700a4188781e23a520356258f0",
".git/objects/a5/51251751ea9c28acf73c451ab3b4055d204662": "89352cbfde2d29c34cab9abed2d9c948",
".git/objects/d1/586a8825d40f30c3a6b25b7be8686a6a2a3bd3": "27eed12be6169f23a819f180d4d054e5",
".git/objects/d6/45695673349e3947e8e5ae42332d0ac3164cd7": "ebdfb3a967cb8dfccb83cfd1bafe5255",
".git/objects/ae/abf1e1a29184897e8a48fd02a9dd6e8e1d53d7": "610db873c41b244c3721fcab77ed9733",
".git/objects/ab/68508d14a22d6edd000542bd92275c32a74e5f": "1da03b43a34f5b9480dba77aecfa86c3",
".git/objects/f3/2ab5859fc96d0f9bb4e48d64cdf44c463c5f9e": "8cf1492b3fb8ce74de0569b9d36b11e5",
".git/objects/c7/0ab889b87f8fe1cfc7d6d54a8491fbe8d57b53": "fa539f26be9a7e8c31dc2c0784aae097",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/228a56d6d1365fb88637eb3bdebaa6f183a94a": "770eab8b3efd0d4472ba1b40ad1069d0",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/e158143f84c28ac6efb7c0af7286caa460fd61": "c27cb09bd71b54261db3417551650b43",
".git/objects/cf/a698bd40c4f956fec5e2b2c166797058a85f22": "930b54d95eed747594788eccb9226621",
".git/objects/e4/0e39ef564fd944bfe842ddf9e4450b8b91d992": "5d494d1ae522befbd0a772d646c4c36e",
".git/objects/fe/53b7a07ee2561733c116ca88d3a19273d084e9": "bdb718582703b6ba82ef47166eec22da",
".git/objects/c8/a13815f231f7e60dbc9d3e7662ca61686d7268": "3b2668d8178466af93fc70d6bc597172",
".git/objects/c8/5aa8e1f6ef1367a6c9bf3a6bbf97935975f922": "4948fccd0ec59da7b94a5028d9e39f20",
".git/objects/4e/3bf0d2b6c951ef2b931b15517bfdb8c457f5f5": "ebc7c1c4c7de24d864c5960ddff9296f",
".git/objects/4b/d13a61559ad0b2d9fd1af50d0eb8112ea013df": "bd68cb8afefed8c69084bfebabda2e7d",
".git/objects/16/4553c047881222be067c68cea39364108ec11b": "7fdb7a9c89fb88f5c3ee4a437a3f29b2",
".git/objects/42/1a447348928585bc52d47a015cecff9cbcae01": "e20ca4e455ac187dafc9cd54401ace82",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/f3c18e795fd4572ea4abb67c34e265679edf9b": "b66b25bc5649a7964cb259e2092a620c",
".git/objects/74/f029c7c4600fe7a89a7d9d70916d50520fd01a": "0eeef09604952e6a8d9f22016f10b044",
".git/objects/17/db86e3f21537f1001003f82c904ce68c0dfc5c": "e35775de733baca9408095122f13261c",
".git/objects/7b/c2d5346815ab27ca7562315c2413bf14e381f1": "45381d29c36f1651483e06dba0b7e8fd",
".git/objects/8f/02c52cba67d8434645fd067aed55b2683347e9": "212ab42cfce514cf09e2ade45a6398d9",
".git/objects/8f/522a3d585e3e14fdb7fc6a3433f88eaf8f0182": "4d9ec45f94b9c10e28d4909392e69b10",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/19/386630c7a9e50c4f49ed7367a6201e65df5474": "148cdb2920d0061b0dfa6510dcb61451",
".git/objects/19/b8155c058893f883f9f33520248809e91011dc": "36b2192b27ebb66051120e75a423a2c0",
".git/objects/19/11d1bdd595ca827e6b5f8dac193759c2b74e9a": "3b362113548191cf6fc971c2a3f92b8c",
".git/objects/4d/fbac9eef16670fa887f04e389f26d088fda275": "7d5cedf814be344e9fda97e3ab8ef3e5",
".git/objects/4d/703a8e3aed5cc02691fc699c06fb3e3d2896c7": "8125b726f074bb67a286048a350bfdfe",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/86/7b76d97819fcbf624b155d507414025073aa58": "97a897de5354657cffea28fd2315b933",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/4c5399ad73549d6f6f7a7554d58756fdbbeaed": "f97e0bdddad4a2c81643a8d94b192670",
".git/objects/9f/c8dc00462599f5a9eb111a6e7c18f4fbe87a5f": "1679c484fc40c81e257cb5884a92d070",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/07e15c3ae09c0e97cc716cf329063a95f5d168": "9827236014351ca337d41d4a8597d7bc",
".git/objects/9a/f2d7244fcf803232e928e422d2977e6bfa8e62": "7513c89d3a8b264135e5e5565d71f39b",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/6b3b938e346460fda0e414192a32e15289e902": "cecd5fe5486198a2b1c7af9cd87ffa08",
".git/objects/91/21de65b273270ddfebf5b0f14a412161710172": "970ff570564edead692162e95af05f0f",
".git/objects/91/3b366d200e8dcc55356a9e37e81ae82c07ffc8": "8348c858d49ea65e80c3701cde73f888",
".git/objects/65/498ee374c89a7c0fb9b1b12d92fcf750fc65cb": "2f130cf192369dfde379d0fdf4471b5d",
".git/objects/96/cbc95327fc2081078d0111b0e0d356496bdc08": "915b74b0c3b7884c24325602d46c740e",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/1ad14572f9bbd6956cc4f01d2c1e82da158b23": "7932617e437fe5da8d76938c005d5e54",
".git/objects/54/868686273a2d68d7ce1128c41f7150064f44eb": "3b83a2ecc3eeb0c11356ecb0fe967851",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/935e5b30137b2c1f2ecaa0d70fa4dd634b293c": "f1b78030f688d39440e0895d054b724f",
".git/objects/53/7eef523e42a4c4d5ada15e9a33c4cf140eef0c": "81232af6a5889fb3f96c17ee3b934104",
".git/objects/5e/39ae97c2a65713da2610f5077b5a44565746f5": "3cd30fb6a1ece47eab83c79023f99170",
".git/objects/5b/1a3b797f8a716a3edd3f96b083fd554458f256": "e59f6c44a5b09be7da56e824c497d8ee",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/eb663a9f411b871909f5cb55d1dc8382f7b962": "27b99eba5170df3d56919623ae1ecff2",
".git/objects/6c/799b05d7012a57c86989380b4a18d42e05d51b": "70be73f8df39a7704e06b38446727566",
".git/objects/52/748d6b3376942e74cef26d4765815c8c88f62c": "20b0725d34125fd149b03bddcefd6e54",
".git/objects/52/ad8771231eda63165491401604c5abe62dd061": "60fbf9041a02e7b2c275e8125730e63f",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/55/837c58582c0acd71589e80117c710d33b90f60": "d454558eb11422845f3aec7a5bf06886",
".git/objects/0f/ca6cc3bc0613c0fd951fe88865b4173e86ebbd": "b4c9e5f36d4011ca14e27c5a53fbe3e3",
".git/objects/0a/4dfd05dc790d7840f8f0be257f5123bd50ad28": "991812a9e50b3852385eda2633354f16",
".git/objects/64/1cf12d589eb58693716793c4821d866bf6142b": "eb30c5e2d1d0a1c0568ab9426b051bb2",
".git/objects/64/7c3e3d4da3cfe39165e6e38a6b2ec0aa3c9f95": "970cd8bb2e2647ac86e2d00b5aabb5e1",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/f3d3d0d1d3a4676b0b21674f49c88117d9b641": "c8277f53bcf4c6948f325799f3cd228e",
".git/objects/a7/e02843a764de221b3d92231f0d6a268b6a8824": "e53be00dbb9577e56699785e22739838",
".git/objects/a7/5d2e6065476091a65f4e514164fe5b6fa02891": "1f0c89803f9286af82e3151e04120223",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/02b0992f5110fd454b85f714e95549a441883f": "c118e8cc15d18c895112b063afe51be7",
".git/objects/dc/d8974348743380a8e4e43c96f7eb1fa56f2cfe": "8b2230cb340341104a4c3794ecf2d8ce",
".git/objects/d5/e64918546d9dd87c9742239deae2397e634343": "676989f47ffa42d7e27f0fde3ce0b31c",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/0756453918b16e60f828a4f86f3567771871d8": "40fb57e84ea465a994793d2fbd89c924",
".git/objects/b7/55ba46d97f657f0f4be3526db68cb450e8f311": "76ff0ccc98766a17cbba8fb7561e390c",
".git/objects/a8/53a38f3449fe6bc3971c0cd9a43a766bd348b1": "22a9e5811279916949965c30da38bd63",
".git/objects/a8/68ce8525063d627d94c45219d435e5a077eeea": "41e0c139b8af6bce91f04b9565f472c4",
".git/objects/de/e9e449afb6efc6211de26e7bf8f2b2cfafe770": "ae18e40ed36fd92aa9b3af4b3f61cb9a",
".git/objects/c3/b2cc2d00b352e9a0b5588479078e0cb80e2de9": "2e3cb06572a8ec36e229a592c832fdef",
".git/objects/ea/ec125e6d26c4e0819680acc8e1ab0c3ec284d4": "e68b0630dbf7aaeb2d54868db4b0a44d",
".git/objects/e6/4db796d1fc0d6f05566dc394fc8640804fcf06": "003240fda8f64736521fc3bb086528b9",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ff/186e95e824a333706a6dee035f9e214d24ea30": "13c8bb1efa0ee77ee566c074c2ccf604",
".git/objects/c2/d48c618ab392636a9fe9f50dd9edc78441a902": "3999c154d111f27a29025d7da6ab7532",
".git/objects/f6/98ac1287a942a95598f79f72dd73d66ae1a606": "ea9394f3cf48b4d2df1b7e571aa77913",
".git/objects/cb/ceb439577c0bf4965a8bc6cda0d9bab48aa6e8": "dfaea5902e0b1ac295a603f949beef54",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/116d920580367caf6a179155f344ede856bf31": "664ce7bca47fdb5e1d15a77de593527b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/4813c565506d6f0e7344f088c0a0391ffe3655": "1bdd5048f214f223cc447ccb66bf407c",
".git/objects/77/ebbf5023c86ad96ef02849ace23ef3de7065e1": "0979d608ab61806288791c547c49c616",
".git/objects/48/f68e8cfbb4f29fb534ad7606ff6c7f829f94b7": "ca7bdebdf19e3101d809b9a612431bce",
".git/objects/48/f4d64d5855c44184c2f529f6a70435e6b05b70": "c4a79804b017df5de5152997f09ad0d4",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/70/7606ec01fb9dcff95c15588cde3112ef97f7e2": "b2eb88612f3c437108dd05982b234839",
".git/objects/1e/df10979e7b5af1d93e98756e99346c93a6af19": "d60cb3115f1a716e2f421b2aeaf3f01f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/a5518ea17034ffc01143dfc6d7a1e552543568": "48bdcb57c9db7fe12ea43bd7ad72c919",
".git/objects/12/97cb2e337c584f8d93e84d08b6666b2b85801b": "07a5f1dc44bbad8d8c0913d0c8fc2839",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/81acf056154ef4f56651c6d70b2233895b8e48": "1a8a39cca7081e162c78463e0e5884f3",
".git/objects/85/2e599b399bb406b1d24777a2308b5063999fb8": "b42aca60ed671fd6a4114752a9ad5bf7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/f80ef8e72c5e1cd10dafd6c91cc965ee7b7ae8": "f6d4c7853363c59bcdfebf11b0a28b7a",
".git/objects/1d/963ad86df51dbfd4103bf7cf8bf18784cc42af": "98aaddd19c9c198e7596b66cee609755",
".git/objects/71/77cdc0e730ad1674d483be32bbb1f42bb9c7db": "d0d8c45b67f1103be78aab86acc715a6",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/1c/f7d47573bf12aab1454e551bbc1367ce5edec2": "301d6793d90c4ff92e0b767f5f1dd40e",
".git/objects/1c/22e56290de1527af31c3cb366d46b7acb9fc3e": "6a105c6bddbbf8ea8baabe794b72afbe",
".git/objects/82/a31118479953250297ec09c715b9a94a824326": "e98801d45f8fc1562c0d69505117eea7",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/78/7c83710792934bf2fc209836991af197be23f8": "8e3aa16ca9d7c899e22dff0fd14e9570",
".git/objects/8b/26168d0c7e8e515552faba4521566b1b808c0e": "101fe922267b1c4beac25659a05fb262",
".git/objects/13/b43166332cd44d7c3b8675ec94d0e467813d6a": "acb97d3a475a2999fe189a14563a415a",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/25/1604d54046b97d5254c844ceb0c4ff729e1ff0": "cad6029f89b49992c695bd4763a66114",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/fork-settings": "68dc7ce76ab58a62254386ed4cf4d0fe",
".git/logs/HEAD": "a5457ddf09d735f59a8fc4303c196913",
".git/logs/refs/heads/main": "aefe553fe3284974858daa83ec3cbc16",
".git/logs/refs/remotes/origin/main": "8c4aa214c69c612d099f7a10d13ba994",
".git/refs/heads/main": "c034aaee597723d2b552adb44d8a79e7",
".git/refs/remotes/origin/main": "c034aaee597723d2b552adb44d8a79e7",
".git/index": "089099af1c5c1e56c094ac46165c1958",
".git/COMMIT_EDITMSG": "1b7408292d5aaa46a811d660863666ae",
".git/FETCH_HEAD": "3c1903cc29f6075499a5848a2e869432",
"assets/AssetManifest.json": "d3ed2b701c39f65b4175f5027565af81",
"assets/NOTICES": "02c3847f99be303edbb9bfe2b967c3ad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f9b4f2b9095baedb471a7a21f618a94c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0bc688dd10433c1c002e313deb18228f",
"assets/fonts/MaterialIcons-Regular.otf": "973639f6cb25913c8fb3d46bb989a9d6",
"assets/assets/images/portrait.jpg": "5db75bfa29646a20cd7462db641f885d",
"assets/assets/images/projects/bookings_app.jpg": "2500cedfde3f2196ea599aee4233b662",
"assets/assets/images/projects/inventory_app.jpg": "b6658ea784ccb7689f83958d61b8bb0e",
"assets/assets/images/projects/sos_app.jpg": "f7b155fb39a51d5b4fc16abf96116d20",
"assets/assets/images/projects/news_app.jpg": "72937afd0ee6e005bdd84e92b987bbad",
"assets/assets/images/deloitte.png": "a50743013a6291b2dee2041ea3c30832",
"assets/assets/images/portrait_blob.png": "aa9f8219e2668a437b234d4b1cfefd04",
"assets/assets/images/duth.png": "e0687d3d6274d9f19c7991a59ce84140",
"assets/assets/sounds/sound.mp3": "d9168662c6509ee69d34572a6d92363e",
"assets/assets/icons/github.svg": "a0b00583d93c2f7084ad151ee0849934",
"assets/assets/icons/mp_logo.png": "fcfc01909b9834caca129a26a433748b",
"assets/assets/icons/file.svg": "55e34c7e1bace869262ab0ae324571e9",
"assets/assets/icons/projects/figma.svg": "2e9d0c50124a8764f454ac10eceeb2fa",
"assets/assets/icons/projects/gemini.svg": "e6fb2cbeb2e04a07cea631da18183c40",
"assets/assets/icons/projects/rfid.svg": "2e9e26d51881019c6a76c4edff652714",
"assets/assets/icons/projects/firebase.svg": "a4cdca210685e2b66e70f9863d03a2de",
"assets/assets/icons/projects/java.svg": "3cbed2cd68a08c58972ae7bfc0296061",
"assets/assets/icons/projects/flutter.svg": "030f81e13f1a723e090651610a5d8c11",
"assets/assets/icons/projects/raspberry.svg": "c3feebe86b129163012929454eeefb49",
"assets/assets/icons/projects/dart.svg": "4a0a9df85742ff469633877bd6e7bdaf",
"assets/assets/icons/projects/sqlite.svg": "6a7290c66b4cc4b87166bf1cf08ffc04",
"assets/assets/icons/projects/bloc.svg": "7c234916bff5a2e32800b5d7ff1eb349",
"assets/assets/icons/email.svg": "7abedc06039f3ec9f01418550990a5e5",
"assets/assets/icons/linkedin.svg": "4b17c9586313717e568e841e662d381e",
"assets/assets/lottie/background.json": "f66fad9976f5a150b1ffd74911a3c662",
"assets/assets/lottie/bird.json": "93e2f15af2a2d23e1429a99cf9aed684",
"assets/assets/translations/en.json": "b94df5d3362dce55e84f9ba34296851a",
"assets/assets/translations/el.json": "d99789f508d94439bc0a80ff837f52a6",
"assets/assets/google_fonts/Roboto/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/google_fonts/Roboto/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/google_fonts/Roboto/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/google_fonts/Roboto/Roboto-MediumItalic.ttf": "18191c4ed1413aac2700bbfa58b90774",
"assets/assets/google_fonts/Roboto/Roboto-ThinItalic.ttf": "0d058ce1aecaa16d26b71bdab2be31b0",
"assets/assets/google_fonts/Roboto/Roboto-BoldItalic.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/assets/google_fonts/Roboto/Roboto-LightItalic.ttf": "b4591abf6ddac60905ad8a2ac5ba5363",
"assets/assets/google_fonts/Roboto/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/google_fonts/Roboto/LICENSE.txt": "3b83ef96387f14655fc854ddc3c6bd57",
"assets/assets/google_fonts/Roboto/Roboto-BlackItalic.ttf": "fc9c6dc66452de428b034f2af1a561ce",
"assets/assets/google_fonts/Roboto/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/google_fonts/Roboto/Roboto-Thin.ttf": "8e1900eabb62e4e502ee3de329e0b833",
"assets/assets/google_fonts/Roboto/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"assets/assets/google_fonts/Roboto_Condensed/RobotoCondensed-VariableFont_wght.ttf": "db98a47617ff4be3def284d81a518149",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Thin.ttf": "9e024e12238807fd31f3a56c346fcbbc",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Bold.ttf": "0233b881b26ce6cc3884c6944940d11b",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-SemiBoldItalic.ttf": "c489b1fd586b681cd542b933034eafac",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Light.ttf": "68680c984f72eef7b2e2cf269382f2a6",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-ExtraBoldItalic.ttf": "b86c432570bc98255e3c84f9efd58b12",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-ThinItalic.ttf": "19effa82b9406779599f8f93574cf374",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-ExtraLight.ttf": "3c8dbc9cdab9e837f36517bd1d264042",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Italic.ttf": "edff0bf76cab6192121ddb8eea6e51a3",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-BoldItalic.ttf": "b52e4a16968bbdbe2fa2256ad48d1cae",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-SemiBold.ttf": "f9d8e599ea4411e8993c7bc09918fadd",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Medium.ttf": "71b4c6d87c5477f0c7843ec6d324e298",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-LightItalic.ttf": "b7dc633f951fada9d6c72196e591772c",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Regular.ttf": "f1123f4b3d926ac4f72cc8091a4b5d19",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-MediumItalic.ttf": "55f67f51e9a89b2e916f1b9bef605be3",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-ExtraLightItalic.ttf": "74387b9c06965b1c7066234f16d5b1a9",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-ExtraBold.ttf": "820ce552a056f8ccdb9703949cdcd954",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Black.ttf": "3541105866680308505e4b754e1e2363",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-BlackItalic.ttf": "3717bfcbc0c286f69c3ca13b3da885f2",
"assets/assets/google_fonts/Roboto_Condensed/RobotoCondensed-Italic-VariableFont_wght.ttf": "df70e7fafa15ce9c4670c7d3eca8df5e",
"assets/assets/google_fonts/Roboto_Condensed/OFL.txt": "d0d30e4860cc10440e095be065c2b0e3",
"assets/assets/google_fonts/Roboto_Condensed/README.txt": "ec9e0bd0aa1f2beac34e1b1860009965",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
