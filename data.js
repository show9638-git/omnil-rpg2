import { HERO_ASSETS, ENEMY_ASSETS, REGION_ASSETS, ICON_ASSETS } from './assets/manifest.js';

export const ASSET = {
  hero: (id, pose='idle') => HERO_ASSETS[id]?.[pose] || null,
  enemy: (id) => ENEMY_ASSETS[id] || null,
  region: (id) => REGION_ASSETS[id] || null,
  icon: (type) => ICON_ASSETS[type] || null,
};

export const HEROES = [
  { id:'kozen', name:'虹全', ruby:'コウゼン', role:'調律の前衛', desc:'白と黒の均衡を整え、味方の連携を虹へ昇華する。', base:{hp:260,mp:95,atk:30,mag:30,def:20,res:20,spd:18,crit:7,evade:4}, heroPassive:'prism', baseSkill:'prism_concord', defaultJob:'swordsman', defaultRace:'human', defaultSkills:['prism_edge','guard_break','rainbow_hymn','resonance_guard'] },
  { id:'hakurei', name:'白零', ruby:'ハクレイ', role:'創生の守護者', desc:'守りと再生を司る。防壁と回復で仲間を折らせない。', base:{hp:300,mp:115,atk:20,mag:32,def:30,res:30,spd:12,crit:3,evade:3}, heroPassive:'creation', baseSkill:'creation_aegis', defaultJob:'guardian', defaultRace:'high_elf', defaultSkills:['white_aegis','renewal_prayer','taunt_wall','purify_light'] },
  { id:'kokurei', name:'黒零', ruby:'コクレイ', role:'終焉の執行者', desc:'弱体と連撃を重ね、敵の綻びを一気に断つ。', base:{hp:235,mp:100,atk:34,mag:31,def:17,res:20,spd:22,crit:10,evade:7}, heroPassive:'ending', baseSkill:'ending_mark', defaultJob:'rogue', defaultRace:'dark_elf', defaultSkills:['black_fang','venom_cut','shadow_step','eclipse_mark'] },
];

export const BASE_SKILLS = {
  prism_concord: { id:'prism_concord', owner:'kozen', name:'三彩共鳴', icon:'prism', tier:'BASE', desc:'白系と黒系の行動を交互に繋ぐと〈共鳴〉を蓄積する。3段階で全体防壁・加速・虹追撃が発動する。', growth:['共鳴1：虹属性威力+8%','共鳴2：味方全体に小防壁','共鳴3：敵全体へ虹追撃＋弱体を1つ解除'], synergy:'白零の防壁・回復、黒零の弱体・状態異常、虹系技能、調律者', builds:'調律・属性・連携・万能' },
  creation_aegis: { id:'creation_aegis', owner:'hakurei', name:'創生の護り', icon:'creation', tier:'BASE', desc:'防壁・回復・浄化を使うたび〈創生〉を付与。創生中の味方は被ダメージが減り、防壁が割れると小回復と浄化を行う。', growth:['創生1：被ダメージ-8%','創生2：防壁破壊時にHP4%回復','創生3：防壁付き味方の回復量+15%'], synergy:'パラディン、聖騎士王、天使、防壁装備、回復技能', builds:'守護・支援・回復・耐性' },
  ending_mark: { id:'ending_mark', owner:'kokurei', name:'終焉刻印', icon:'ending', tier:'BASE', desc:'弱体・状態異常中の敵を攻撃すると〈終焉刻印〉を重ねる。刻印数に応じて追撃率が上がり、HP35%以下の敵へ処刑ダメージを与える。', growth:['刻印1：状態異常中の敵への与ダメ+8%','刻印2：追撃率+12%','刻印3：HP35%以下に処刑追撃'], synergy:'アサシン、終焉の騎士、ダークエルフ、毒・出血・火傷、会心装備', builds:'妨害・継続ダメージ・会心・背水' },
};

export const RACES = [
  {id:'human',name:'人間',icon:'human',unlock:'開始時',flavor:'変化へ最も早く順応する民。',bonus:{hp:0,mp:8,atk:2,mag:2,def:2,res:2,spd:2,crit:1,evade:1},passive:'万能適応：獲得職業経験値+8%',good:'万能・職業育成',weak:'極端な特化',tag:'mastery'},
  {id:'high_elf',name:'エルフ',icon:'elf',unlock:'開始時',flavor:'森と精霊の声を聞く長命の魔術民。',bonus:{hp:-12,mp:24,atk:0,mag:8,def:-1,res:5,spd:3,crit:0,evade:3},passive:'精霊感応：属性魔法+8%',good:'属性魔法・召喚',weak:'重装・背水',tag:'element'},
  {id:'dark_elf',name:'ダークエルフ',icon:'darkelf',unlock:'開始時',flavor:'深影に生き、弱点を見逃さない狩人。',bonus:{hp:-10,mp:12,atk:4,mag:4,def:-2,res:1,spd:7,crit:5,evade:5},passive:'夜狩り：会心率+5%、状態異常成功+7%',good:'会心・妨害',weak:'防壁',tag:'crit'},
  {id:'dwarf',name:'ドワーフ',icon:'dwarf',unlock:'鍛冶を5回行う',flavor:'火床と鉄を愛する山の職人。',bonus:{hp:32,mp:-8,atk:5,mag:-2,def:9,res:3,spd:-3,crit:1,evade:-2},passive:'鍛冶の血：装備強化効果+6%',good:'重装・反撃',weak:'速度・魔法',tag:'guard'},
  {id:'beastfolk',name:'獣人',icon:'beastfolk',unlock:'翠風の草原ボスを撃破',flavor:'野性の勘と鋭い嗅覚を持つ民。',bonus:{hp:15,mp:0,atk:7,mag:-1,def:1,res:0,spd:7,crit:3,evade:4},passive:'狩猟本能：敵撃破時、HPを3%回復',good:'連撃・周回',weak:'詠唱',tag:'combo'},
  {id:'catfolk',name:'猫人',icon:'catfolk',unlock:'回避を30回成功させる',flavor:'軽やかな足取りで戦場を舞う。',bonus:{hp:-5,mp:4,atk:3,mag:1,def:-3,res:0,spd:11,crit:3,evade:9},passive:'九生の歩法：回避時、次の攻撃の威力+15%',good:'回避・反撃',weak:'重装',tag:'evasion'},
  {id:'wolfkin',name:'狼人',icon:'wolfkin',unlock:'狩人Lv10',flavor:'群れの連携を力に変える月の民。',bonus:{hp:20,mp:-2,atk:8,mag:-2,def:3,res:0,spd:6,crit:4,evade:2},passive:'群狼連携：追撃発生率+6%',good:'追撃・物理',weak:'回復',tag:'combo'},
  {id:'dragonkin',name:'竜人',icon:'dragonkin',unlock:'嵐冠の塔を解放',flavor:'竜の鱗と息吹を受け継ぐ戦士。',bonus:{hp:40,mp:2,atk:9,mag:2,def:7,res:5,spd:-2,crit:2,evade:-2},passive:'竜鱗：火・雷耐性+15%',good:'耐久・属性',weak:'回避',tag:'resist'},
  {id:'lizardman',name:'リザードマン',icon:'lizardman',unlock:'陽痕の砂海ボスを撃破',flavor:'灼熱に順応した堅牢な戦闘種。',bonus:{hp:28,mp:-5,atk:7,mag:-1,def:6,res:2,spd:1,crit:1,evade:0},passive:'再生鱗：毎ターンHPを最大値の2%回復',good:'長期戦・反撃',weak:'瞬間火力',tag:'regen'},
  {id:'angel',name:'天使',icon:'angel',unlock:'白零の絆Lv5',flavor:'光を掲げ、傷ついた者を導く翼人。',bonus:{hp:5,mp:22,atk:-1,mag:7,def:1,res:9,spd:2,crit:0,evade:2},passive:'聖翼：回復量+12%',good:'回復・防壁',weak:'背水',tag:'heal'},
  {id:'fallen',name:'堕天使',icon:'fallen',unlock:'黒零の絆Lv5',flavor:'墜ちた翼に、抗う意志を宿す。',bonus:{hp:4,mp:18,atk:4,mag:6,def:0,res:4,spd:4,crit:4,evade:2},passive:'堕翼：HP50%未満で与ダメ+12%',good:'背水・闇',weak:'安定周回',tag:'berserk'},
  {id:'demon',name:'悪魔',icon:'demon',unlock:'状態異常を100回付与',flavor:'契約と代償で力を引き出す異界の民。',bonus:{hp:8,mp:16,atk:4,mag:7,def:-2,res:3,spd:3,crit:2,evade:2},passive:'魔契：状態異常成功率+12%',good:'妨害・DoT',weak:'浄化敵',tag:'status'},
  {id:'vampire',name:'吸血鬼',icon:'vampire',unlock:'吸収で累計5000回復',flavor:'夜の血を糧に、不死へ近づく。',bonus:{hp:10,mp:8,atk:6,mag:4,def:0,res:3,spd:5,crit:4,evade:3},passive:'血宴：与ダメージの4%をHP吸収',good:'吸収・会心',weak:'光属性敵',tag:'lifesteal'},
  {id:'goblin',name:'ゴブリン',icon:'goblin',unlock:'素材を500個集める',flavor:'小柄ながら、道具の使い方をよく知る。',bonus:{hp:-8,mp:6,atk:1,mag:1,def:-1,res:0,spd:8,crit:2,evade:4},passive:'拾い上手：素材ドロップ+10%',good:'周回・素材',weak:'正面戦闘',tag:'loot'},
  {id:'orc',name:'オーク',icon:'orc',unlock:'防御で累計10000軽減',flavor:'豪腕と粘り強さを誇る戦士の民。',bonus:{hp:45,mp:-10,atk:10,mag:-4,def:5,res:-1,spd:-4,crit:1,evade:-3},passive:'不屈：HP30%未満で被ダメ-12%',good:'背水・重装',weak:'魔法・回避',tag:'berserk'},
  {id:'giant',name:'巨人',icon:'giant',unlock:'敵を300体撃破',flavor:'一振りに大地を震わせる大きな民。',bonus:{hp:65,mp:-15,atk:14,mag:-6,def:9,res:0,spd:-8,crit:1,evade:-5},passive:'巨躯：単体物理威力+10%、回避-5%',good:'両手武器・反撃',weak:'速度・多段',tag:'power'},
  {id:'fairy',name:'妖精',icon:'fairy',unlock:'回復スキルを100回使う',flavor:'小さな羽で幸運を運ぶ精霊の隣人。',bonus:{hp:-20,mp:30,atk:-3,mag:9,def:-4,res:6,spd:8,crit:2,evade:8},passive:'幸運の粉：レアドロップ率+6%',good:'支援・周回',weak:'重装',tag:'loot'},
  {id:'elemental',name:'精霊',icon:'elemental',unlock:'属性弱点を50回突く',flavor:'元素そのものに近い、輪郭の薄い存在。',bonus:{hp:-14,mp:28,atk:-4,mag:12,def:-3,res:7,spd:5,crit:0,evade:4},passive:'元素循環：属性スキルのMP消費-10%',good:'属性魔法',weak:'物理',tag:'element'},
  {id:'undead',name:'アンデッド',icon:'undead',unlock:'戦闘不能から10回帰還',flavor:'死を越え、痛みへの恐れを失った者。',bonus:{hp:25,mp:8,atk:4,mag:4,def:4,res:4,spd:-1,crit:1,evade:0},passive:'死者の執念：戦闘不能を1回だけHP20%で耐える',good:'耐久・背水',weak:'浄化',tag:'survive'},
  {id:'automaton',name:'機械人形',icon:'automaton',unlock:'嵐冠の塔ボスを撃破',flavor:'精密な演算で戦術を最適化する人造体。',bonus:{hp:18,mp:12,atk:3,mag:3,def:7,res:7,spd:2,crit:2,evade:1},passive:'演算補助：クールダウン短縮+6%',good:'スキル連射・防壁',weak:'回復',tag:'cooldown'},
];

const normalJobs = [
 ['warrior','戦士','onehand_sword','heavy_armor','前線で敵を受け止める基本の戦闘職。','guard'],
 ['swordsman','剣士','onehand_sword','light_armor','剣技と連撃に優れる正統派の剣客。','combo'],
 ['guardian','盾兵','shield','heavy_armor','盾と挑発で味方を守る防衛職。','shield'],
 ['lancer','槍兵','spear','heavy_armor','間合いと貫通を操る対大型戦士。','pierce'],
 ['archer','弓兵','bow','light_armor','弱点を射抜く遠距離の狩人。','crit'],
 ['rogue','盗賊','dagger','light_armor','回避と急所攻撃で翻弄する。','evasion'],
 ['monk','格闘家','dagger','light_armor','連打と自己強化を得意とする。','combo'],
 ['priest','僧侶','staff','robe','祈りで傷を癒す支援職。','heal'],
 ['white_mage','白魔導士','staff','robe','光の術で治癒と浄化を担う。','heal'],
 ['black_mage','黒魔導士','staff','robe','破壊魔法を専門とする術師。','magic'],
 ['fire_mage','火術師','staff','robe','火傷と爆発を操る属性術師。','fire'],
 ['ice_mage','氷術師','staff','robe','凍結と防御低下を操る属性術師。','ice'],
 ['thunder_mage','雷術師','staff','robe','感電と高速詠唱を操る属性術師。','thunder'],
 ['summoner','召喚士','tome','robe','使い魔を呼び出して戦う。','summon'],
 ['bard','吟遊詩人','tome','light_armor','歌で味方を強化する支援職。','buff'],
 ['apothecary','薬師','tome','light_armor','薬と毒で戦場を制御する。','status'],
 ['hunter','狩人','bow','light_armor','獲物を追い詰め、報酬を得る。','loot'],
 ['ninja','忍者','dagger','light_armor','影を走り、先制して断つ。','evasion'],
 ['pirate','海賊','axe','light_armor','豪快な一撃と略奪を好む。','loot'],
 ['alchemist','錬金術師','tome','robe','素材を変換し、戦術道具を作る。','craft'],
];
const advancedJobs = [
 ['paladin','パラディン','onehand_sword','heavy_armor',['warrior','guardian'],'聖なる防壁と挑発で隊列を守る。','shield'],
 ['berserker','バーサーカー','axe','heavy_armor',['warrior','monk'],'傷を力へ変える暴戦士。','berserk'],
 ['swordmaster','ソードマスター','onehand_sword','light_armor',['swordsman','lancer'],'連撃と剣閃を極めた剣士。','combo'],
 ['dark_knight','ダークナイト','twohand_sword','heavy_armor',['warrior','black_mage'],'HPを代償に闇を振るう。','berserk'],
 ['royal_guard','ロイヤルガード','shield','heavy_armor',['guardian','lancer'],'守護と反撃を兼ねる騎士。','reflect'],
 ['dragoon','ドラグーン','spear','heavy_armor',['lancer','hunter'],'跳躍と竜槍で急所を穿つ。','pierce'],
 ['ranger','レンジャー','bow','light_armor',['archer','hunter'],'罠と弱点射撃を使い分ける。','crit'],
 ['assassin','アサシン','dagger','light_armor',['rogue','ninja'],'標的を刻印し、急所を連ねる。','crit'],
 ['high_priest','ハイプリースト','staff','robe',['priest','white_mage'],'大きな癒しと蘇生を司る。','heal'],
 ['bishop','ビショップ','staff','robe',['priest','bard'],'浄化と強化で仲間を支える。','buff'],
 ['archmage','アークメイジ','staff','robe',['black_mage','fire_mage'],'多属性を使い分ける大魔術師。','magic'],
 ['necromancer','ネクロマンサー','tome','robe',['black_mage','summoner'],'死霊を呼び、敵を蝕む。','summon'],
 ['summon_master','サモナーマスター','tome','robe',['summoner','bard'],'使い魔を統率し、連携させる。','summon'],
 ['battle_master','バトルマスター','twohand_sword','heavy_armor',['warrior','swordsman'],'武器を選ばず前線を支配する。','power'],
 ['master_alchemist','錬金術師長','tome','robe',['apothecary','alchemist'],'薬品と錬成で戦況を覆す。','craft'],
 ['spellblade','魔法剣士','onehand_sword','light_armor',['swordsman','black_mage'],'刃に属性を纏わせて戦う。','element'],
 ['shadow_dancer','影舞','dagger','light_armor',['rogue','bard'],'回避と追撃で敵陣を舞う。','evasion'],
 ['beast_tamer','獣使い','bow','light_armor',['hunter','summoner'],'獣との共闘で戦線を作る。','summon'],
];
const transcendJobs = [
 ['holy_king','聖騎士王','onehand_sword','heavy_armor',['paladin','royal_guard','high_priest'],'守護と再生を極めた王の騎士。','shield'],
 ['sword_saint','剣聖','onehand_sword','light_armor',['swordmaster','battle_master','spellblade'],'一太刀に全てを賭ける究極の剣客。','crit'],
 ['war_oni','戦鬼','axe','heavy_armor',['berserker','battle_master','dragoon'],'傷を越え、戦意だけで立つ鬼神。','berserk'],
 ['mage_king','魔導王','staff','robe',['archmage','spellblade','master_alchemist'],'全属性の法則を書き換える術者。','magic'],
 ['grand_sage','大賢者','staff','robe',['archmage','bishop','summon_master'],'知と祈りと召喚を統べる。','cooldown'],
 ['death_emperor','死霊皇','tome','robe',['necromancer','summon_master','master_alchemist'],'死者の軍勢と呪いを従える。','summon'],
 ['dragon_general','竜騎将','spear','heavy_armor',['dragoon','royal_guard','battle_master'],'竜の力を槍に宿す将軍。','power'],
 ['shadow_ninja','影忍','dagger','light_armor',['assassin','shadow_dancer','ranger'],'一瞬の隙を永遠の終わりに変える。','evasion'],
 ['high_hierophant','神官長','staff','robe',['high_priest','bishop','bard'],'味方の魂を結び直す大司祭。','heal'],
 ['worldtree_warden','世界樹の守護者','bow','light_armor',['ranger','beast_tamer','high_priest'],'生命の循環を守る森の守護者。','regen'],
 ['end_knight','終焉の騎士','twohand_sword','heavy_armor',['dark_knight','berserker','necromancer'],'終わりを受け入れ、敵を断つ。','status'],
 ['tuner','調律者','tome','robe',['holy_king','end_knight','mage_king'],'白・黒・虹の均衡を力にするオムニルの到達点。','prism'],
];

function jobObj(row,tier,index){
 const [id,name,weapon,armor,reqOrDesc,descOrTag,maybeTag]=row;
 const req = Array.isArray(reqOrDesc)?reqOrDesc:[];
 const desc=Array.isArray(reqOrDesc)?descOrTag:reqOrDesc;
 const tag=Array.isArray(reqOrDesc)?maybeTag:descOrTag;
 const base={normal:{hp:10,mp:3,atk:3,mag:3,def:2,res:2,spd:1},advanced:{hp:18,mp:6,atk:5,mag:5,def:4,res:4,spd:2},transcend:{hp:28,mp:9,atk:8,mag:8,def:6,res:6,spd:3}}[tier];
 const tagMods={guard:{def:5,hp:20},shield:{def:7,res:4},combo:{atk:5,spd:4},pierce:{atk:6,crit:3},crit:{crit:6,spd:3},evasion:{evade:7,spd:4},heal:{mp:14,mag:5,res:3},magic:{mp:15,mag:7},fire:{mp:10,mag:6},ice:{mp:10,mag:5,res:4},thunder:{mp:11,mag:5,spd:4},summon:{mp:14,mag:4},buff:{mp:12,res:4},status:{mp:8,spd:2},loot:{spd:3,crit:2},craft:{mp:7,res:3},berserk:{hp:25,atk:8},reflect:{def:7,res:3},power:{hp:15,atk:8},element:{mag:6,atk:3},cooldown:{mp:10,spd:3},regen:{hp:18,res:4},prism:{mp:15,atk:4,mag:4}}[tag]||{};
 return {id,name,tier,weapon,armor,desc,tag,requiresJobs:req,requiresStory: tier==='normal'?Math.floor(index/4):0, maxLevel:10, bonus:{...base,...Object.fromEntries(Object.entries(tagMods).map(([k,v])=>[k,(base[k]||0)+v]))}, passive:jobPassive(tag), skillFamily:tag, next:[]};
}
function jobPassive(tag){
 const map={guard:'被ダメージ-5%',shield:'防壁量+12%',combo:'追撃率+6%',pierce:'防御無視+6%',crit:'会心ダメージ+15%',evasion:'回避時に反撃率+10%',heal:'回復量+12%',magic:'属性魔法+8%',fire:'火傷威力+16%',ice:'凍結中の敵へのダメージ+12%',thunder:'感電中の敵へのダメージ+12%',summon:'召喚ダメージ+15%',buff:'強化効果時間+1ターン',status:'状態異常成功率+10%',loot:'ドロップ率+7%',craft:'素材獲得+10%',berserk:'HP50%未満で与ダメ+10%',reflect:'防御時に被ダメの8%反射',power:'物理スキル威力+8%',element:'属性一致時与ダメ+10%',cooldown:'クールダウン短縮+6%',regen:'毎ターンHP2%回復',prism:'白・黒・虹スキルの連携威力+12%'};
 return map[tag]||'役割に応じた成長補正';
}
export const JOBS=[...normalJobs.map((x,i)=>jobObj(x,'normal',i)),...advancedJobs.map((x,i)=>jobObj(x,'advanced',i)),...transcendJobs.map((x,i)=>jobObj(x,'transcend',i))];
const jobMap=Object.fromEntries(JOBS.map(j=>[j.id,j]));
JOBS.forEach(j=>{ if(j.tier==='normal'){j.next=JOBS.filter(x=>x.tier==='advanced'&&x.requiresJobs.includes(j.id)).map(x=>x.id)} else if(j.tier==='advanced'){j.next=JOBS.filter(x=>x.tier==='transcend'&&x.requiresJobs.includes(j.id)).map(x=>x.id)} });

export const REGIONS=[
 {id:'verdant_steppe',name:'翠風の草原',story:0,level:1,danger:'複数攻撃に注意',resist:'特になし',reward:'草原素材・戦士系装備',time:'25秒',desc:'風が走る草原。最初の連携を学ぶ場所。',enemies:['moss_slime','horn_rabbit','root_wisp'],boss:'reed_stalker',tags:['物理','自然'],bg:'verdant_steppe',unlock:'開始時'},
 {id:'whispering_wood',name:'囁きの森',story:1,level:4,danger:'毒・回避に注意',resist:'毒耐性・命中',reward:'森素材・弓/短剣装備',time:'35秒',desc:'木々の囁きが迷いを誘う深い森。',enemies:['mud_crab','reed_stalker','bog_lurker'],boss:'ash_hound',tags:['毒','回避'],bg:'whispering_wood',unlock:'翠風の草原ボス撃破'},
 {id:'ashfall_ridge',name:'灰降る火山',story:2,level:8,danger:'火傷・高火力に注意',resist:'火耐性・防壁',reward:'火山素材・斧/火術装備',time:'45秒',desc:'灰と火の粉が絶えず降る火山帯。',enemies:['ash_hound','cinder_imp','iron_beetle'],boss:'dune_scorpion',tags:['火傷','物理'],bg:'ashfall_ridge',unlock:'囁きの森ボス撃破'},
 {id:'frostveil_pass',name:'霜隠れの峠',story:3,level:12,danger:'凍結・防御低下に注意',resist:'氷耐性・浄化',reward:'氷晶・防具/氷術装備',time:'50秒',desc:'足跡さえ消す吹雪の山道。',enemies:['frost_owl','ice_moth','snow_golem'],boss:'glass_serpent',tags:['凍結','防御低下'],bg:'frostveil_pass',unlock:'灰降る火山ボス撃破'},
 {id:'sunscar_dunes',name:'陽痕の砂海',story:4,level:16,danger:'出血・単体高火力に注意',resist:'物理防御・回復',reward:'砂晶・槍/会心装備',time:'55秒',desc:'陽光の傷跡を抱く終わりなき砂海。',enemies:['dune_scorpion','glass_serpent','sun_vulture'],boss:'ruin_knight',tags:['出血','会心'],bg:'sunscar_dunes',unlock:'霜隠れの峠ボス撃破'},
 {id:'sunken_archive',name:'沈みし書庫',story:5,level:21,danger:'魔法防御低下・召喚に注意',resist:'魔法防御・解除',reward:'古文書・魔導書/召喚装備',time:'65秒',desc:'水底に沈み、なお知識を囁く書庫。',enemies:['arcane_eye','bone_scribe','abyss_jelly'],boss:'coral_giant',tags:['魔法','召喚'],bg:'sunken_archive',unlock:'陽痕の砂海ボス撃破'},
 {id:'stormcrown_spire',name:'嵐冠の塔',story:6,level:27,danger:'感電・速度差に注意',resist:'雷耐性・速度',reward:'雷核・機械/雷術装備',time:'75秒',desc:'雲上へ突き立つ、嵐を喰む古塔。',enemies:['storm_drake','thunder_sprite','cloud_raider'],boss:'white_wyrm',tags:['感電','高速'],bg:'stormcrown_spire',unlock:'沈みし書庫ボス撃破'},
 {id:'prism_sanctum',name:'虹彩の聖域',story:7,level:35,danger:'白黒虹の連携破壊に注意',resist:'全耐性・解除・防壁',reward:'神話素材・虹装備・超級職',time:'95秒',desc:'白と黒の境界に浮かぶ、虹の最終領域。',enemies:['void_mantle','star_sentinel','prism_beast'],boss:'rainbow_herald',tags:['白','黒','虹'],bg:'prism_sanctum',unlock:'嵐冠の塔ボス撃破'},
];

export const ENEMIES=[
 ['moss_slime','苔スライム','slime','回復','自然'],['horn_rabbit','角兎','rabbit','高速','物理'],['root_wisp','根の精霊','wisp','弱体','自然'],
 ['mud_crab','泥甲殻','crab','高防御','物理'],['reed_stalker','葦の狩人','plant','毒','自然'],['bog_lurker','沼伏せ','amphibian','回避','毒'],
 ['ash_hound','灰狼','wolf','連撃','火'],['cinder_imp','燃えさし鬼','imp','火傷','火'],['iron_beetle','鉄甲虫','beetle','防壁','物理'],
 ['frost_owl','霜梟','owl','凍結','氷'],['ice_moth','氷鱗蛾','moth','魔法','氷'],['snow_golem','雪石人','golem','高防御','氷'],
 ['dune_scorpion','砂蠍','scorpion','出血','物理'],['glass_serpent','玻璃蛇','serpent','会心','雷'],['sun_vulture','陽鷲','bird','単体高火力','火'],
 ['ruin_knight','遺跡騎士','knight','反撃','物理'],['arcane_eye','秘術眼','eye','魔法防御低下','闇'],['bone_scribe','骨の書記','skeleton','召喚','闇'],
 ['storm_drake','嵐竜','dragon','感電','雷'],['thunder_sprite','雷精','wisp','高速','雷'],['cloud_raider','雲賊','raider','バフ','雷'],
 ['abyss_jelly','深海クラゲ','jelly','沈黙','水'],['coral_giant','珊瑚巨兵','golem','高防御','水'],['tide_siren','潮歌の魔女','siren','弱体','水'],
 ['void_mantle','虚無の外套','cloak','解除','闇'],['star_sentinel','星護衛','knight','防壁','光'],['prism_beast','晶獣','beast','属性変化','虹'],
 ['white_wyrm','白の飛竜','dragon','浄化','光'],['black_wyrm','黒の飛竜','dragon','吸収','闇'],['rainbow_herald','虹の告知者','angel','ボスギミック','虹'],
].map(([id,name,kind,role,element],i)=>({id,name,kind,role,element,index:i,base:{hp:145+i*12,atk:17+i*2,mag:15+i*2,def:9+Math.floor(i*1.4),res:8+Math.floor(i*1.2),spd:8+(i%6)*2}}));

const EFFECTS=[
 {key:'strike',label:'斬撃',type:'damage',kind:'physical',tags:['物理'],desc:'敵単体へ物理ダメージ。'},
 {key:'burst',label:'術式',type:'damage',kind:'magic',tags:['魔法'],desc:'敵単体へ魔法ダメージ。'},
 {key:'sweep',label:'掃討',type:'aoe',kind:'physical',tags:['範囲'],desc:'敵全体へ物理ダメージ。'},
 {key:'nova',label:'爆裂',type:'aoe',kind:'magic',tags:['範囲','魔法'],desc:'敵全体へ魔法ダメージ。'},
 {key:'heal',label:'祈り',type:'heal',kind:'heal',tags:['回復'],desc:'味方単体を回復。'},
 {key:'mend',label:'再生',type:'regen',kind:'heal',tags:['回復','継続'],desc:'味方全体に再生を付与。'},
 {key:'shield',label:'防壁',type:'shield',kind:'shield',tags:['防壁'],desc:'味方単体へ防壁を付与。'},
 {key:'ward',label:'結界',type:'ward',kind:'shield',tags:['防壁','全体'],desc:'味方全体へ小さな防壁。'},
 {key:'poison',label:'毒刃',type:'status',kind:'physical',status:'poison',tags:['毒'],desc:'物理ダメージと毒を付与。'},
 {key:'bleed',label:'裂傷',type:'status',kind:'physical',status:'bleed',tags:['出血'],desc:'物理ダメージと出血を付与。'},
 {key:'burn',label:'灼熱',type:'status',kind:'magic',status:'burn',tags:['火傷'],desc:'魔法ダメージと火傷を付与。'},
 {key:'freeze',label:'氷縛',type:'status',kind:'magic',status:'freeze',tags:['凍結'],desc:'魔法ダメージと凍結を付与。'},
 {key:'shock',label:'雷縛',type:'status',kind:'magic',status:'shock',tags:['感電'],desc:'魔法ダメージと感電を付与。'},
 {key:'weaken',label:'弱体',type:'debuff',kind:'magic',status:'weaken',tags:['弱体'],desc:'敵の防御を下げる。'},
 {key:'silence',label:'封術',type:'debuff',kind:'magic',status:'silence',tags:['沈黙'],desc:'敵の魔法を封じる。'},
 {key:'taunt',label:'挑発',type:'taunt',kind:'shield',tags:['挑発'],desc:'敵の狙いを引き受ける。'},
 {key:'counter',label:'構え',type:'counter',kind:'shield',tags:['反撃'],desc:'反撃態勢をとる。'},
 {key:'haste',label:'加速',type:'buff',kind:'support',status:'haste',tags:['強化'],desc:'味方の速度と連撃率を上げる。'},
 {key:'focus',label:'集中',type:'buff',kind:'support',status:'focus',tags:['強化','会心'],desc:'次の攻撃を強化する。'},
 {key:'purify',label:'浄化',type:'cleanse',kind:'heal',tags:['解除'],desc:'味方の弱体を解除し小回復。'},
 {key:'dispel',label:'破呪',type:'dispel',kind:'magic',tags:['解除'],desc:'敵の強化と防壁を剥がす。'},
 {key:'summon',label:'召喚',type:'summon',kind:'magic',tags:['召喚'],desc:'使い魔を呼び、毎ターン追撃。'},
 {key:'drain',label:'吸命',type:'drain',kind:'magic',tags:['吸収'],desc:'与えたダメージの一部を吸収。'},
 {key:'execute',label:'断罪',type:'execute',kind:'physical',tags:['背水'],desc:'HPが低い敵へ大きなダメージ。'},
 {key:'prism',label:'調律',type:'prism',kind:'support',tags:['虹','連携'],desc:'白・黒・虹の連携数で効果が上がる。'},
];
const ELEMENTS=[['neutral','無'],['fire','火'],['ice','氷'],['thunder','雷']];
const NAME_PREFIX={
 '無':['鋼','影','守護','疾風','月影'], '火':['炎','焔','紅蓮','熾火','火輪'], '氷':['氷','霜','白雪','凍星','蒼氷'], '雷':['雷','迅雷','鳴神','紫電','嵐'],
};
export function createSkills(){
 const out=[]; let n=0;
 for(const eff of EFFECTS){
   for(let rank=1;rank<=5;rank++){
     for(const [elementCode,elem] of ELEMENTS){
       const p=NAME_PREFIX[elem][(rank+eff.key.length)%NAME_PREFIX[elem].length];
       const id=`${eff.key}_${elementCode}_${rank}`;
       const coeff=Number((0.78+rank*.22+(eff.type==='aoe'?.08:0)).toFixed(2));
       out.push({id,name:`${p}${eff.label} ${['初式','改式','真式','極式','奥義'][rank-1]}`,effect:eff.key,type:eff.type,kind:eff.kind,element:elem,status:eff.status||null,rank,coeff,mp:Math.max(4,4+rank*3+(eff.type==='aoe'?4:0)),cd:Math.max(0,rank-2),tags:eff.tags,desc:eff.desc,require:{level:rank*2,jobTag:rank>=4?null:null},unlock:`熟練度Lv${rank*2}`});
       n++;
     }
   }
 }
 // exactly 500: 25*5*4 = 500
 return out;
}
export const SKILLS=createSkills();
export const SKILL_MAP=Object.fromEntries(SKILLS.map(s=>[s.id,s]));

export const CORE_SKILLS = {
 prism_edge:'strike_neutral_2', guard_break:'weaken_neutral_1', rainbow_hymn:'prism_neutral_2', resonance_guard:'shield_neutral_2',
 white_aegis:'shield_neutral_3', renewal_prayer:'heal_neutral_3', taunt_wall:'taunt_neutral_2', purify_light:'purify_neutral_2',
 black_fang:'strike_neutral_3', venom_cut:'poison_neutral_2', shadow_step:'haste_neutral_2', eclipse_mark:'weaken_neutral_3'
};

const EQUIP_TYPES=[
 ['onehand_sword','片手剣',['鉄の剣','鋼の剣','騎士の剣']],['twohand_sword','両手剣',['大鉄剣','戦斧剣','王国大剣']],['dagger','短剣',['革柄短剣','影の短剣','吸血短剣']],['axe','斧',['木こり斧','戦斧','破城斧']],['spear','槍',['鉄槍','騎士槍','竜槍']],['bow','弓',['木弓','狩人の弓','長弓']],['staff','杖',['樫の杖','術士の杖','賢者の杖']],['tome','魔導書',['初等魔導書','古文書','星詠みの書']],['shield','盾',['木の盾','鉄の盾','守護者の盾']],
 ['light_armor','軽装',['旅人の服','革鎧','忍びの装束']],['heavy_armor','重装',['鉄の胸当て','鋼の鎧','竜鱗の鎧']],['robe','ローブ',['術士のローブ','祈りのローブ','星布のローブ']],['helm','兜',['鉄兜','騎士兜','竜骨の兜']],['hat','帽子',['旅人の帽子','術士の帽子','月影の帽子']],
 ['ring','指輪',['銅の指輪','魔導士の指輪','王家の指輪']],['necklace','首飾り',['革紐の首飾り','再生の首飾り','星晶の首飾り']],['bracelet','腕輪',['革の腕輪','会心の腕輪','守護の腕輪']],['charm','護符',['木彫りの護符','浄化の護符','虹晶の護符']],['relic','特殊装備',['古びた遺物','神話の欠片','調律の核']],
];
const AFFIXES=[
 ['守護の','guard',{def:8,barrier:10},'防壁量+10%'],['会心の','crit',{crit:7},'会心率+7%'],['疾風の','evasion',{spd:7,evade:5},'速度+7・回避+5%'],['吸血の','lifesteal',{lifesteal:4},'与ダメージの4%を吸収'],['猛毒の','status',{statusPower:10},'毒・出血・火傷の威力+10%'],['賢者の','magic',{mag:9,mp:14},'魔法攻撃+9・MP+14'],['狩人の','loot',{dropRate:8,xpRate:5},'ドロップ率+8%・経験値+5%'],
];
export const RARITY_ORDER=['コモン','アンコモン','レア','エピック','レジェンダリー','ユニーク'];
export const RARITIES=[['コモン',1,1],['アンコモン',1.12,2],['レア',1.30,3],['エピック',1.62,4],['レジェンダリー',2.02,5]];
function baseStatFor(type,tier){
 const scale=(tier+1)*5;
 if(['onehand_sword','twohand_sword','dagger','axe','spear','bow'].includes(type)) return {atk:scale*2,crit:type==='dagger'?tier+2:0};
 if(['staff','tome'].includes(type)) return {mag:scale*2,mp:scale*3};
 if(type==='shield') return {def:scale*3,hp:scale*7};
 if(['heavy_armor','helm'].includes(type)) return {def:scale*3,hp:scale*8};
 if(['light_armor','hat'].includes(type)) return {def:scale*1.4,spd:tier+2,evade:tier+2};
 if(type==='robe') return {res:scale*2,mag:scale,mp:scale*3};
 return {hp:scale*4,mp:scale,crit:tier,evade:tier};
}
export function createEquipmentCatalog(){
 const items=[];
 for(const [type,label,bases] of EQUIP_TYPES){
   for(let tier=0;tier<3;tier++){
     for(const [prefix,affix,mods,desc] of AFFIXES){
       for(const [rarity,mult,stars] of RARITIES){
         const base=baseStatFor(type,tier); const scaled={};
         for(const [k,v] of Object.entries(base)) scaled[k]=Math.round(v*mult);
         const applied={...scaled}; for(const [k,v] of Object.entries(mods)) applied[k]=(applied[k]||0)+Math.round(v*mult);
         const id=`${type}_${tier}_${affix}_${rarity}`;
         items.push({id,name:`${prefix}${bases[tier]}`,type,typeLabel:label,rarity,stars,level:(tier+1)*8,stats:applied,mods,affix,desc,source:'地域ドロップ / 鍛冶',tags:[affix,type],set:`${['旅人','騎士','術士','狩人','竜鱗','虹晶','影舞'][tier+affix.length%7]}装備`,icon:type});
       }
     }
   }
 }
 const uniqueSpecs=[
  ['onehand_sword','白黒虹の調律剣','prism',{atk:66,mag:36,crit:8,prism:18},'白・黒・虹スキルの連携威力+18%','虹彩の聖域ボス','全零遺物'],
  ['twohand_sword','断界の大剣','power',{atk:86,hp:90,crit:6},'単体攻撃の威力+18%、速度-4','境界の討伐依頼','断界装備'],
  ['dagger','終焉の黒牙','status',{atk:58,spd:22,crit:18,statusPower:14},'毒・出血・火傷の威力+14%、会心時に追撃','黒零絆依頼','全零遺物'],
  ['axe','戦鬼の戦斧','berserk',{atk:78,hp:120,crit:8},'HP50%未満で与ダメージ+22%','戦鬼の試練','戦鬼装備'],
  ['spear','天穿つ竜槍','pierce',{atk:72,crit:11,spd:10},'ボスへの与ダメージ+16%','竜騎将の試練','竜鱗装備'],
  ['bow','星狩りの長弓','crit',{atk:60,crit:22,dropRate:8},'会心時に獲得Gold+5%','星狩人の依頼','狩人装備'],
  ['staff','世界樹の杖','heal',{mag:68,mp:70,res:20,barrier:10},'回復量+18%、防壁量+10%','世界樹の守護者','世界樹装備'],
  ['tome','死霊皇の禁書','summon',{mag:74,mp:62,statusPower:12},'召喚・継続ダメージ+16%','死霊皇の試練','冥府装備'],
  ['shield','創生の大盾','shield',{hp:170,def:50,res:24,barrier:22},'防壁量+22%、戦闘開始時に防壁','白零絆依頼','全零遺物'],
  ['light_armor','影舞の装束','evasion',{def:24,spd:20,evade:18},'回避成功時に追撃率+15%','影忍の試練','影舞装備'],
  ['heavy_armor','聖騎士王の鎧','guard',{hp:180,def:48,res:30,barrier:14},'挑発中の被ダメージ-16%','聖騎士王の試練','王護装備'],
  ['robe','大賢者の法衣','magic',{mag:70,mp:84,res:26},'属性スキルのMP消費-14%','大賢者の試練','賢者装備'],
  ['helm','白竜の兜','resist',{hp:90,def:30,res:24},'火・雷耐性+18%','双竜の守り手','竜鱗装備'],
  ['hat','月影の帽子','cooldown',{mp:46,spd:14,evade:10},'クールダウン短縮+10%','月影の探索者','月影装備'],
  ['ring','虹晶の指輪','prism',{mag:35,atk:28,crit:9,prism:12},'虹技能の威力+12%','虹晶の採掘場','虹晶装備'],
  ['necklace','再誕の首飾り','regen',{hp:120,res:16},'毎ターンHP3%回復','再誕の泉','再生装備'],
  ['bracelet','無双の腕輪','combo',{atk:38,crit:14,spd:8},'連撃・追撃の威力+12%','無双の闘技場','無双装備'],
  ['charm','浄化の護符','resist',{res:26,hp:74},'毒・出血・火傷耐性+30%','浄化の神域','浄化装備'],
  ['relic','調律の核','prism',{hp:110,mp:64,atk:26,mag:26,prism:20},'白・黒・虹の連携効果+20%','最終領域・虹彩の聖域','全零遺物'],
 ];
 const uniques=uniqueSpecs.map(([type,name,affix,stats,desc,source,set],i)=>({id:`unique_${type}`,name,type,typeLabel:EQUIP_TYPES.find(x=>x[0]===type)[1],rarity:'ユニーク',stars:6,level:40,stats,mods:stats,affix,desc,source,tags:[affix,'unique',type],set,icon:type}));
 return [...items,...uniques];
}
export const EQUIPMENT=createEquipmentCatalog();
export const EQUIP_MAP=Object.fromEntries(EQUIPMENT.map(x=>[x.id,x]));

export const QUESTS=[
 {id:'q_grass',name:'翠風の草原を踏破',desc:'翠風の草原のボスを撃破する。',goal:'boss:verdant_steppe',reward:'獣人・囁きの森'},
 {id:'q_forge',name:'初めての鍛冶',desc:'装備を3回強化する。',goal:'forge:3',reward:'ドワーフ・鍛冶素材'},
 {id:'q_poison',name:'毒を制する者',desc:'毒または出血を30回付与する。',goal:'status:30',reward:'悪魔・薬師'},
 {id:'q_guard',name:'守りの要',desc:'防壁で累計2000ダメージを防ぐ。',goal:'barrier:2000',reward:'盾兵技術書'},
 {id:'q_hunt',name:'狩人の作法',desc:'敵を100体撃破する。',goal:'kills:100',reward:'狩人・レンジャー依頼'},
 {id:'q_archive',name:'沈みし知識',desc:'沈みし書庫のボスを撃破する。',goal:'boss:sunken_archive',reward:'機械人形・アークメイジ依頼'},
 {id:'q_prism',name:'三色の調律',desc:'虹彩の聖域へ到達する。',goal:'region:prism_sanctum',reward:'調律者への道'},
];

export function findJob(id){return jobMap[id]}
export function getSkill(id){return SKILL_MAP[id]||SKILLS[0]}
export function findEnemy(id){return ENEMIES.find(x=>x.id===id)}
export function findRegion(id){return REGIONS.find(x=>x.id===id)}
