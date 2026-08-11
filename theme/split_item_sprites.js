const INLINE_SPLIT_ITEM_ICON_BASE = 'https://play.pokemonshowdown.com/sprites/itemicons/';
const INLINE_SPLIT_ITEM_ICON_ALT_BASE = 'https://img.pokemondb.net/sprites/items/';
const INLINE_SPLIT_ITEM_ICON_FALLBACK = `${INLINE_SPLIT_ITEM_ICON_BASE}0.png`;
const SPLIT_ITEM_BULBAGARDEN_FILE_BASE = 'https://archives.bulbagarden.net/wiki/Special:FilePath/';
const SPLIT_BARE_BERRY_ITEMS = new Set([
  'aspear', 'cheri', 'chesto', 'chople', 'custap', 'jaboca', 'lansat', 'leppa',
  'lum', 'micle', 'oran', 'pecha', 'persim', 'rawst', 'rindo',
  'rowap', 'salac', 'sitrus', 'occa',
]);
const SPLIT_STATIC_ITEM_ALIASES = {
  'new encounter location': ['old-sea-map'],
  'berry juices': ['berry-juice'],
  'dive balls': ['dive-ball'],
  'dusk balls': ['dusk-ball'],
  'quick balls': ['quick-ball'],
  'sitrus berries': ['sitrus-berry'],
  'occa berries': ['occa-berry'],
  'pearls': ['pearl'],
  'revives': ['revive'],
  'lure': ['lure'],
};
const SPLIT_DIRECT_ITEM_ICON_URLS = {
  'drampanite': 'https://archives.bulbagarden.net/media/upload/1/1e/Bag_Drampanite_ZA_Sprite.png',
  'eject pack': 'https://archives.bulbagarden.net/media/upload/f/f1/Bag_Eject_Pack_SV_Sprite.png',
  'raichunite x': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Raichunite_X_ZA_Sprite.png',
  'raichunite y': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Raichunite_Y_ZA_Sprite.png',
  'pyroarite': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Pyroarite_ZA_Sprite.png',
  'loaded dice': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Loaded_Dice_SV_Sprite.png',
  'booster energy': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Booster_Energy_SV_Sprite.png',
  'clear amulet': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Clear_Amulet_SV_Sprite.png',
  'blunder policy': 'https://archives.bulbagarden.net/media/upload/4/4f/Bag_Blunder_Policy_SV_Sprite.png',
  'punching glove': 'https://archives.bulbagarden.net/media/upload/0/0f/Bag_Punching_Glove_SV_Sprite.png',  
  'covert cloak': 'https://archives.bulbagarden.net/media/upload/d/d5/Bag_Covert_Cloak_SV_Sprite.png',
  'room service': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Room_Service_SV_Sprite.png',
  'ability shield': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Ability_Shield_SV_Sprite.png',
  'throat spray': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Throat_Spray_SV_Sprite.png',
  'mirror herb': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Mirror_Herb_SV_Sprite.png',
  'red orb': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Red_Orb_Sprite.png',
  'hyper candy': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Exp._Candy_XL_SV_Sprite.png',
  'endless candy': 'https://archives.bulbagarden.net/wiki/Special:FilePath/Bag_Rare_Candy_SV_Sprite.png',
  'victreebelite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Victreebelite_ZA_Sprite.png',
'dragoninite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Dragoninite_ZA_Sprite.png',
'meganiumite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Meganiumite_ZA_Sprite.png',
'feraligite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Feraligite_ZA_Sprite.png',
'skarmorite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Skarmorite_ZA_Sprite.png',
'froslassite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Froslassite_ZA_Sprite.png',
'emboarite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Emboarite_ZA_Sprite.png',
'excadrillite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Excadrillite_ZA_Sprite.png',
'scolipite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Scolipite_ZA_Sprite.png',
'scraftinite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Scraftinite_ZA_Sprite.png',
'eelektrossite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Eelektrossite_ZA_Sprite.png',
'chandelurite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Chandelurite_ZA_Sprite.png',
'delphoxite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Delphoxite_ZA_Sprite.png',
'greninjite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Greninjite_ZA_Sprite.png',
'floettite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Floettite_ZA_Sprite.png',
'malamarite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Malamarite_ZA_Sprite.png',
'dragalgite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Dragalgite_ZA_Sprite.png',
'hawluchanite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Hawluchanite_ZA_Sprite.png',
'zygardite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Zygardite_ZA_Sprite.png',
'drampanite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Drampanite_ZA_Sprite.png',
'falinksite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Falinksite_ZA_Sprite.png',

'clefablite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Clefablite_ZA_Sprite.png',
'starminite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Starminite_ZA_Sprite.png',

'absolite z': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Absolite_Z_ZA_Sprite.png',
'staraptorite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Staraptorite_ZA_Sprite.png',
'tatsugirite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Tatsugirite_ZA_Sprite.png',
'meowsticite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Meowsticite_ZA_Sprite.png',
'heatranite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Heatranite_ZA_Sprite.png',
'darkraite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Darkraite_ZA_Sprite.png',
'crabominablite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Crabominablite_ZA_Sprite.png',
'magearnite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Magearnite_ZA_Sprite.png',
'lucarionite z': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Lucarionite_Z_ZA_Sprite.png',
'chimechoite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Chimechoite_ZA_Sprite.png',
'scovillainite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Scovillainite_ZA_Sprite.png',
'golurkite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Golurkite_ZA_Sprite.png',
'golisopodite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Golisopodite_ZA_Sprite.png',
'glimmorite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Glimmorite_ZA_Sprite.png',
'zeraorite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Zeraorite_ZA_Sprite.png',
'baxcaliburite': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Baxcaliburite_ZA_Sprite.png',
'garchompite z': 'https://archives.bulbagarden.net/wiki/Special:Redirect/file/Bag_Garchompite_Z_ZA_Sprite.png',
'lure': 'https://archives.bulbagarden.net/media/upload/9/90/Bag_Lure_Sprite.png',
'utility umbrella': 'https://archives.bulbagarden.net/media/upload/2/2f/Bag_Utility_Umbrella_SV_Sprite.png',
  'clear amulet': 'https://archives.bulbagarden.net/media/upload/f/fa/Bag_Clear_Amulet_SV_Sprite.png',
  'leek': 'https://archives.bulbagarden.net/media/upload/8/89/Bag_Leek_ZA_Sprite.png',
  'fairy feather': 'https://archives.bulbagarden.net/media/upload/9/97/Bag_Fairy_Feather_SV_Sprite.png',

};
const SPLIT_MINT_ICON_FILES = {
  'adamant': 'Bag_Mint_Attack_SV_Sprite.png',
  'bold': 'Bag_Mint_Defense_SV_Sprite.png',
  'brave': 'Bag_Mint_Attack_SV_Sprite.png',
  'calm': 'Bag_Mint_Sp._Def_SV_Sprite.png',
  'careful': 'Bag_Mint_Sp._Def_SV_Sprite.png',
  'gentle': 'Bag_Mint_Sp._Def_SV_Sprite.png',
  'hasty': 'Bag_Mint_Speed_SV_Sprite.png',
  'impish': 'Bag_Mint_Defense_SV_Sprite.png',
  'jolly': 'Bag_Mint_Speed_SV_Sprite.png',
  'lax': 'Bag_Mint_Defense_SV_Sprite.png',
  'lonely': 'Bag_Mint_Attack_SV_Sprite.png',
  'mild': 'Bag_Mint_Sp._Atk_SV_Sprite.png',
  'modest': 'Bag_Mint_Sp._Atk_SV_Sprite.png',
  'naive': 'Bag_Mint_Speed_SV_Sprite.png',
  'naughty': 'Bag_Mint_Attack_SV_Sprite.png',
  'quiet': 'Bag_Mint_Sp._Atk_SV_Sprite.png',
  'rash': 'Bag_Mint_Sp._Atk_SV_Sprite.png',
  'relaxed': 'Bag_Mint_Defense_SV_Sprite.png',
  'sassy': 'Bag_Mint_Sp._Def_SV_Sprite.png',
  'serious': 'Bag_Serious_Mint_Sprite.png',
  'timid': 'Bag_Mint_Speed_SV_Sprite.png',
};
const SPLIT_MACHINE_MOVE_TYPES = {
  'attract': 'normal',
  'breaking swipe': 'dragon',
  'bulldoze': 'ground',
  'defog': 'flying',
  'electroweb': 'electric',
  'facade': 'normal',
  'flash': 'normal',
  'focus punch': 'fighting',
  'foul play': 'dark',
  'hidden power': 'normal',
  'hyper voice': 'normal',
  'magical leaf': 'grass',
  'rock smash': 'fighting',
  'rock tomb': 'rock',
  'self destruct': 'normal',
  'smack down': 'rock',
  'solar beam': 'grass',
  'solar blade': 'grass',
  'surf': 'water',
  'swift': 'normal',
  'torment': 'dark',
  'whirlpool': 'water',
};
const SPLIT_MACHINE_ICON_TYPES = new Set([
  'bug', 'dark', 'dragon', 'electric', 'fighting', 'fire', 'flying', 'ghost',
  'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water',
]);

function toSplitItemHyphenId(name) {
  return name
    .toLowerCase()
    .replace(/[.'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function toSplitItemCompactId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function normalizeSplitItemName(name) {
  return name
    .replace(/^\s*[-.:]\s*/, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/^\d+\s*x?\s*/i, '')
    .replace(/\.{3}.*/, '')
    .replace(/\b(?:berry trees?|gym leader rewards?|npc items?|overworld items?|delibird deliveries?):.*$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeSplitLookupKey(name) {
  return name.toLowerCase().replace(/\s+/g, ' ').trim();
}

function toSplitTitleFileToken(value) {
  return value
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join('_');
}

function getSplitMintIconUrl(normalizedName) {
  const mintMatch = normalizedName.match(/^([a-z]+) mint$/);
  if (!mintMatch) return null;

  const nature = mintMatch[1];
  const fileName = SPLIT_MINT_ICON_FILES[nature] || `Bag_${toSplitTitleFileToken(nature)}_Mint_Sprite.png`;
  return `${SPLIT_ITEM_BULBAGARDEN_FILE_BASE}${fileName}`;
}

function getSplitBerryIconUrl(normalizedName) {
  const berryName = SPLIT_BARE_BERRY_ITEMS.has(normalizedName)
    ? `${normalizedName} berry`
    : normalizedName;

  if (!berryName.endsWith(' berry')) return null;

  const berryStem = berryName.slice(0, -' berry'.length).trim();
  if (!berryStem) return null;

  return `${SPLIT_ITEM_BULBAGARDEN_FILE_BASE}Bag_${toSplitTitleFileToken(berryStem)}_Berry_SV_Sprite.png`;
}

function getSplitDirectItemIconUrl(normalizedName) {
  return SPLIT_DIRECT_ITEM_ICON_URLS[normalizedName]
    || getSplitMintIconUrl(normalizedName)
    || getSplitBerryIconUrl(normalizedName)
    || getSplitMegaStoneIconUrl(normalizedName);
}

function getSplitLocalItemIconUrl(directIconUrl) {
  if (!directIconUrl) return null;
  const fileMatch = directIconUrl.match(/\/([^/?#]+\.png)(?:[?#]|$)/i);
  return fileMatch ? `images/item-sprites/${decodeURIComponent(fileMatch[1])}` : null;
}

function getSplitMegaStoneIconUrl(normalizedName) {
  if (!/ite(?: [xyz])?$/.test(normalizedName)) return null;
  return `${SPLIT_ITEM_BULBAGARDEN_FILE_BASE}Bag_${toSplitTitleFileToken(normalizedName)}_ZA_Sprite.png`;
}

function getSplitMachineIconId(cleanName) {
  const normalized = normalizeSplitLookupKey(cleanName);

  const tmMatch = normalized.match(/^(?:tm|tms|tr|trs)\s+(.+)$/i);
  if (tmMatch) {
    const moveName = tmMatch[1].trim();
    const moveType = SPLIT_MACHINE_MOVE_TYPES[moveName];
    if (moveType && SPLIT_MACHINE_ICON_TYPES.has(moveType)) return `tm-${moveType}`;
    return 'tm-normal';
  }

  const hmMatch = normalized.match(/^hm\d*\s+(.+)$/i);
  if (hmMatch) {
    const moveName = hmMatch[1].trim();
    const moveType = SPLIT_MACHINE_MOVE_TYPES[moveName];
    if (moveType && SPLIT_MACHINE_ICON_TYPES.has(moveType)) return `hm-${moveType}`;
    return 'hm-normal';
  }

  if (/^hm\d*\b/i.test(normalized)) return 'hm-normal';
  return null;
}

function createSplitItemFallbackImage(candidates, altText) {
  if (!candidates.length) return null;

  const img = document.createElement('img');
  img.className = 'ts-inline-item-sprite';
  img.alt = altText;
  img.loading = 'lazy';

  let index = 0;
  img.src = candidates[index];
  img.addEventListener('error', () => {
    index += 1;
    if (index < candidates.length) {
      img.src = candidates[index];
      return;
    }
    img.remove();
  });

  return img;
}

function makeSplitItemIcon(itemText) {
  const cleanName = normalizeSplitItemName(itemText);
  if (!cleanName) return null;

  const idCandidates = [];
  const normalized = normalizeSplitLookupKey(cleanName);
  const hyphenId = toSplitItemHyphenId(cleanName);
  const compactId = toSplitItemCompactId(cleanName);

  if (hyphenId) idCandidates.push(hyphenId);
  if (compactId) idCandidates.push(compactId);

  const aliasIds = SPLIT_STATIC_ITEM_ALIASES[normalized];
  if (aliasIds) idCandidates.push(...aliasIds);

  const singularHyphen = hyphenId ? hyphenId.replace(/s$/, '') : '';
  if (singularHyphen && singularHyphen !== hyphenId) idCandidates.push(singularHyphen);

  if (SPLIT_BARE_BERRY_ITEMS.has(normalized)) {
    idCandidates.push(`${hyphenId}-berry`);
    idCandidates.push(`${compactId}berry`);
  }

  const machineIconId = getSplitMachineIconId(cleanName);
  if (machineIconId) {
    idCandidates.push(machineIconId);
    if (machineIconId.startsWith('tm-')) idCandidates.push('tm-normal', 'tm-case');
    if (machineIconId.startsWith('hm-')) idCandidates.push('hm-normal');
  }

  if (/ite(?:\s+[xy])?$/i.test(cleanName)) {
    idCandidates.push('eviolite');
  }

  const uniqueIds = [...new Set(idCandidates.filter(Boolean))];
  const candidates = [];
  const directIconUrl = getSplitDirectItemIconUrl(normalized);
  const localIconUrl = getSplitLocalItemIconUrl(directIconUrl);
  if (localIconUrl) candidates.push(localIconUrl);
  if (directIconUrl) candidates.push(directIconUrl);
  uniqueIds.forEach((id) => {
    candidates.push(`${INLINE_SPLIT_ITEM_ICON_BASE}${id}.png`);
    candidates.push(`${INLINE_SPLIT_ITEM_ICON_ALT_BASE}${id}.png`);
  });
  candidates.push(INLINE_SPLIT_ITEM_ICON_FALLBACK);

  return createSplitItemFallbackImage([...new Set(candidates)], `${cleanName} icon`);
}

function decorateSplitItemSprites() {
  const tables = document.querySelectorAll('.content-table');

  tables.forEach((table) => {
    const rows = table.querySelectorAll('tbody tr');
    if (rows.length < 4) return;

    // Some generated tables contain an extra empty <tr> before the image row.
    // Anchor on the species header row so item lookup stays aligned.
    const speciesRowIndex = Array.from(rows).findIndex((row) => row.querySelector('th'));
    const itemRow = speciesRowIndex >= 0 ? rows[speciesRowIndex + 2] : rows[3];
    if (!itemRow) return;

    Array.from(itemRow.cells).forEach((cell) => {
      const itemName = cell.textContent.trim();
      if (!itemName || cell.querySelector('.ts-inline-item-sprite')) return;

      const icon = makeSplitItemIcon(itemName);
      if (!icon) return;

      const wrapper = document.createElement('span');
      wrapper.className = 'ts-inline-label';
      wrapper.appendChild(icon);
      wrapper.appendChild(document.createTextNode(itemName));

      cell.textContent = '';
      cell.appendChild(wrapper);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', decorateSplitItemSprites);
} else {
  decorateSplitItemSprites();
}
