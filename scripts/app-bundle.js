define('app',['exports', 'aurelia-framework', './content/soh'], function (exports, _aureliaFramework, _soh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_soh.Episodes), _dec(_class = function App(episodes) {
    _classCallCheck(this, App);

    this.audioArray = episodes.getEpisodes();
  }) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('content/soh',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.episodes = exports.Episodes = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Episodes = exports.Episodes = (_dec = (0, _aureliaFramework.noView)(), _dec(_class = function () {
    function Episodes() {
      _classCallCheck(this, Episodes);
    }

    Episodes.prototype.getEpisodes = function getEpisodes() {
      return episodes;
    };

    return Episodes;
  }()) || _class);
  var episodes = exports.episodes = [{
    title: 'The adventure begins...',
    location: '',
    summary: '<p>The young nobles Arthur Cromwell of Bondsport in the Queen\'s Isles and Tal\'Sariel of Sudin in the Southern Lands meet with Tavedar of Kish of the Haxtam Plains, Maethor Stormbreaker of Hilbear in the North, and Nelmthyr of Osh from the Eastern Jungle as they enter the capital city of Kilarn; home of the world seat ruled the High King Haldric Dame IV and his wife Penelope Dame of Gobon. The champions were warmply greeted as they entered the city. Parades were thrown in their honor as the High King welcomed them in a rousing speech into an enterprising endeavour to bring unity to the lands since the end of the three year war with the north.  After an incredible dinner the likes of which some of the group had never seen before, they were given luxurious accommodations to get a good nights rest.</p><p>In the morning they assembled in the great hall and were not met with the same pom and pageantry they met the day before. The hall was empty and the party from the night before was cleaned up. The halls removed of all furniture. As the party assembled, they grew concerned about this display, or lack there of. A few minutes passed before a large contingent of kings guard entered the hall surrounding them. As panic began to set in, the group is greeted by High Queen Penelope Dame of Gobon.</p><p>The High Queen introduces herself to the group and regrettably let\'s them know that the call was made from her not her husband, who sees her endeavor as folly. She sees the good in the nations and wants to find a way to bring them together. She has a vision of the kingdoms united as one where peace rules and not the pitiful quabbles that has become the status quo. Where the citizens both and noble can live happy lives without the fear of war and invasion. She calls for the group to be her alliance. She wants to groups to solve issues throughout the kingdoms in the name of peace. The high Queen does warn them that the other High Lords do not support the alliance and would use the opportunity to make the High King look weak or turn the tables on each other should any individual do as they wished without the thought of any repercussions. The impact could also reverberate back to their families. This was not a threat but a warning that they are in a very uncomfortable position. Should they fail, the kingdom could go to war and/or their houses, clans, or tribes could suffer the consequences. Yet, should they succeed, a new world could be born. </p><p>Handing them an edict allowing safe passage between the kingdoms, the High Queen wishes them luck, tells them to check with the field marshal for assignment and takes her leave. A little shocked by the twist, the group does some formal introductions and heads to the field marshal, a [race] named [name]. The field marshal let\'s them know right away that he doesn\'t believe in their endeavor and knows it will fail. After some traded quips the group is instructed to report to The Mines of Bonn. Their curator Barne has asked for aide as their shipments of iron and silver ore are being attacked by bandits. The group, thinking that this task is beneath them, take the assignment and, after procuring supplies and work horses, make their way to the south.</p><p>On their way to the southern town of Cerrita, they encounter a young halfling female bard set upon by thugs who ambushed her on her way to catch up with her troupe. The group proves their prowess in battle as they dispatch the thugs and their leader. They learn the young halfling goes by the name Kaylee, and wanted to thank the group for saving her life. They make their way to Cerrita where Kaylee uses her musical skills to get the group food and lodging for the night. Kaylee asks the group if she could join them, as she feels they are out to do good in the world. The group reluctantly agree to keep her on as far as The Mines and see where it goes from there. </p><p>Tavedar, Nelmthyr, and Maethor make their way to the local guard house to inquire about any information about the region. The guard captain tells them that security has been increased in the area over the past months and the decree came down from Belgrave, the capital city of the Southern Kingdom. With no more information coming, they return to the inn and rejoin the group. Meanwhile, Tal\'Sariel encounters the local thieves guild and is given a warning that the thieves guild has something in the works and he is not to interfere with his dealings in the south.</p><p>The group rests for the night and in the morning continue on their way south. They make a stop at the city of Sidival, a shanty town of miners that surround the miner\'s exchange of the region. Tal\'Sariel, having worked in this region takes the lead secures the group lodgings with an old acquaintance. The group decides to speak with the head of the miners exchange to see about getting information. Arriving at the miners exchange they speak with the exchange leader [name]. After making proper introductions they learn that Barne requested aide from [name] because the mines were being attacked. [name] takes this as Barne trying to con him again and sends some sentries to have words with Barne. The sentries, after questioning Barne, finds Barne telling the truth and evidence of some bird like scratchings around the bodies and empty carts. The conversation is disrupted by the sound of noise outside. [name] steps outside, they hear the sound of many arrows falling. Soon after, [name] returns and concludes his business with the group.</p><p>The group takes their leave and notices a dead man in the square riddled with arrows. Tavedar and Arthur pay locals to bury the body and make their way to speak with one of the sentries who confirms what [name] told the group. They then decide to make their way into the shanty town to eavesdrop on the locals for more information.</p>'
  }, {
    title: 'Along the road',
    location: '../audio/SoH_10_4_2017.mp3',
    summary: '<p>The group continue to make their way to the shanty town of Sidival. Kaylee setup her equipment near the main well and began playing a jovial melody. It isn\'t long until the haggered residents join in the fun and enjoy a moment of uplifting revelry. The joy in the down trodens eyes is enough to make the giant goliath, Maethor smile. During this time, Tal\'Sarial and Tavadar scan the crowd for anyone of interest. Tavadar uses his magical powers to lighly probe the mind of random people in the crowd. He hears songs in their minds, talk of working hard, and in one mind he finds recognition from someone looking at Tal\'Sarial. The gentleman approaches and they find that it is one of Tal\'s old crew friends, a human fighter by the name of Raegar. Raegar had been down on his luck and needed a job to earn some money. The group seeing this as an opportunity to bolster their ranks for a brief time, welcomed the fighter. After Kaylee\'s concert ended she found a 7 year old and his mother and father walking back to the shanty town. The mother was obviously exhausted and the father had a lost look on his face. After some smooth talking they found that the mother, Sylvie was the bread winner for the family since her husband Grey escaped the ambush injuredby hiding under the bodies of his dead friends. He muttered about giggling, arrows, red men, a long necked beast, and a cold hearted man who attacked the caravan. Tavadar, cast detect disease and poison and found the remnants of poison in Grey\'s system. Through his long years of study recalled that the beast had to be a Serpopard. After healing Grey and giving Sylvie some money, the group made their way back to the Pounded Wench Inn and discussed what would be done next.  Tavadar, made a quick stop at a ram-shackled church to use their brazier to summon his minion, a small bat.</p><p>The next morning, the group headed out to check the wagon pathways on the way to The Mines of Boon. It took them most of the day to navigate the rough paths of the hills and mountains with Tal\'Sarial scouting ahead and Tavadar\'s minion flying overhead. His bat reported that there was something up ahead to which Tavedar messaged Tal\'Sarial the information. Tal\'Sarial found a recently attacked caravan with giant hyenas eating the corpses. The group decided to catch the beasts unaware and struck quickly. Maethor and Raegar dispatched a hyena. Kaylee attempted to cast Bane on the rest of the hyenas but her magic was dispelled. The group then found themselves face to face with hobgoblins and giant hyenas. The battle raged on as Maethor shifted into bear form and attacked a group of hold them at bay. Raegar dispatched another hyena, and Kaylee healed the hurt and gave inspiration to the two warriors. Tavedar webbed the area and restrained a hobgoblin while Raegar dispatched another hyena. Tal\'Sarial\'s found that he was targeted by an unknown assailant as a cold tipped spear flew and shattered as it hit him also impacting Tavedar.</p><p>After the first hobgoblin fell, the Serpopard made his appearance and was commanded to attack the group by a strange half orc appeared from the bushes. Tal\'Sarial was held off as every shot he made was countered by the half orc archer. Raegar continued to disptach foes as he fought bravely. The Serpopard attacked and poisoned Maethor but he held strong as he beast shape was rended away from him by multiple strikes. He quickly shifted back into bear form and continued his attack. The battle strectched on but the mighty Raegar fought with a ferocity not seen by the group as he slew opponenet after opponent. Kaylee fell as she tried to aid Maethor but was brought back by Tavedar. Tavedar cast web near Raegar ensnaring but he still fought on. The Serpopard attacked Raegar but he fought on. Tal\'Sariel aided Raegar in fighting the Serpopard and landed the killing blow. Maethor dispatched the last hyena and the half orc, infuriated by this loss retreated from the group back to the mines to gather his forces.</p> '
  }];
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-12\"><div class=\"header_background\"><div class=\"dnd_logo\"><div class=\"dnd_camapign_text\">Sins of Hygara</div><img src=\"./images/DnD_Transparent.png\" width=\"35%\"></div></div></div></div><div class=\"row\"><div class=\"col-sm-12\"><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li><a href=\"#\">Characters</a></li><li class=\"active\"><a href=\"#\">Adventure <span class=\"sr-only\">(current)</span></a></li></ul></div></div></nav></div></div><div class=\"row\"><div class=\"col-sm-12\"><div repeat.for=\"audio of audioArray\" class=\"alert alert-secondary\" role=\"alert\"><div class=\"episode-title\">${audio.title}</div><div class=\"episode-summary\" innerhtml.bind=\"audio.summary\"></div><div><audio controls><source src=\"${audio.location}\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio></div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map