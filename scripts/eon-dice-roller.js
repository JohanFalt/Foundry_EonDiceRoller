let numberDices = 0;
let diceType = "";
let obRoll = true;

Hooks.once('init', async function() {
  const dice = {
    'd6': `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
    <g>
      <path d="M 11.5 9 C 10.149212 8.9609669 8.960847 10.149856 9 11.5 L 9 51.195312 C 8.7783001 52.934174 9.4649439 55.027114 11.5 55.199219 L 51.195312 55.199219 C 52.934562 55.433915 55.164599 54.729057 55.099609 52.599609 L 55.099609 12.90625 C 55.334305 11.167 54.629448 8.935012 52.5 9 L 11.5 9 z M 22.671875 13.931641 A 4.3972788 4.3972788 0 0 1 22.705078 13.931641 A 4.3972788 4.3972788 0 0 1 27.101562 18.330078 A 4.3972788 4.3972788 0 0 1 22.705078 22.726562 A 4.3972788 4.3972788 0 0 1 18.306641 18.330078 A 4.3972788 4.3972788 0 0 1 22.671875 13.931641 z M 41.367188 13.931641 A 4.3972788 4.3972788 0 0 1 41.398438 13.931641 A 4.3972788 4.3972788 0 0 1 45.796875 18.330078 A 4.3972788 4.3972788 0 0 1 41.398438 22.726562 A 4.3972788 4.3972788 0 0 1 37.001953 18.330078 A 4.3972788 4.3972788 0 0 1 41.367188 13.931641 z M 22.671875 27.732422 A 4.3972788 4.3972788 0 0 1 22.705078 27.732422 A 4.3972788 4.3972788 0 0 1 27.101562 32.130859 A 4.3972788 4.3972788 0 0 1 22.705078 36.527344 A 4.3972788 4.3972788 0 0 1 18.306641 32.130859 A 4.3972788 4.3972788 0 0 1 22.671875 27.732422 z M 41.367188 27.732422 A 4.3972788 4.3972788 0 0 1 41.398438 27.732422 A 4.3972788 4.3972788 0 0 1 45.796875 32.130859 A 4.3972788 4.3972788 0 0 1 41.398438 36.527344 A 4.3972788 4.3972788 0 0 1 37.001953 32.130859 A 4.3972788 4.3972788 0 0 1 41.367188 27.732422 z M 22.671875 41.751953 A 4.3972788 4.3972788 0 0 1 22.705078 41.751953 A 4.3972788 4.3972788 0 0 1 27.101562 46.150391 A 4.3972788 4.3972788 0 0 1 22.705078 50.546875 A 4.3972788 4.3972788 0 0 1 18.306641 46.150391 A 4.3972788 4.3972788 0 0 1 22.671875 41.751953 z M 41.398438 41.751953 A 4.3972788 -4.3972788 0 0 1 45.796875 46.150391 A 4.3972788 -4.3972788 0 0 1 41.398438 50.546875 A 4.3972788 -4.3972788 0 0 1 37.001953 46.150391 A 4.3972788 -4.3972788 0 0 1 41.398438 41.751953 z " />
    </g>
    </svg>`,
    'd10': `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
      <g>
        <g transform="matrix(1.1679092,0,0,1.1679092,-274.931,-137.53749)">
          <path d="M263.4,124.6L249.9,153l12.5,8.1l13.5-8.2L263.4,124.6z"/>
          <path d="M264.1,124.1l12.5,28.6l7.3-2.3l0.5-11.6L264.1,124.1z"/>
          <path d="M262.7,161.8v4.4l20.9-14.7l-7,2L262.7,161.8z"/>
          <path d="M262.7,124.2l-13.7,28.5l-7.1-3.1l-0.6-11.6L262.7,124.2z"/>
          <path d="M261.8,161.7v4.5l-20-15.4l6.9,2.7L261.8,161.7z"/>
        </g>
      </g>
      </svg>`,
    'd100': `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
      <g>
        <g transform="matrix(1.1679092,0,0,1.1679092,-274.931,-137.53749)">
          <polygon points="264.7,150.8 263.7,151.4 262.2,152.3 261.4,152.8 259.6,153.8 253.3,157.7 242.7,150.8 254.2,126.6 258.2,135.9
            259.9,139.8 262.7,146.1 263.1,147 263.1,147 		"/>
          <polygon points="271.9,138.7 271.5,148.5 265.4,150.5 263.5,146.2 263.1,145.3 258.8,135.5 257.8,133.3 254.7,126.2 255.8,127
            263.4,132.5 267.8,135.7 268.3,136 		"/>
          <polygon points="271.3,149.5 264.9,154.1 264.6,154.2 264.2,154.5 262.3,155.9 253.6,162 253.6,158.2 260.2,154.3 262.1,153.2
            262.8,152.7 263.9,152 265.4,151.1 		"/>
          <path d="M253.6,126.3L242,150.5l-6.1-2.6l-0.5-9.9L253.6,126.3z"/>
          <path d="M252.8,158.2v3.8l-17-13.1l5.9,2.3L252.8,158.2z"/>
        </g>
      </g>
      <g>
        <g transform="matrix(1.1679092,0,0,1.1679092,-274.931,-137.53749)">
          <polygon points="283,151.5 271.5,158.4 265.6,154.5 272.2,149.7 272.6,138.2 268.6,135.3 272.5,127.3 		"/>
          <path d="M273,126.9l10.6,24.3l6.2-2l0.4-9.8L273,126.9z"/>
          <path d="M271.9,159v3.7l17.7-12.5l-5.9,1.7L271.9,159z"/>
          <polygon points="271.9,127 268.1,134.9 264.1,132 		"/>
          <polygon points="265,155 271.1,158.9 271.1,162.7 262.9,156.4 		"/>
        </g>
      </g>
      </svg>`
  };

  CONFIG.DICETRAY = {
    dice: dice
  };

  Handlebars.registerHelper('dtSvgDie', (context, options) => {
    return `${context}Svg`;
  });

  // Register dice partials.
  for (let [die, tpl] of Object.entries(CONFIG.DICETRAY.dice)) {
    Handlebars.registerPartial(`${die}Svg`, tpl);
  }

  // A mapper for behavior and layout functions depending on the game system
  const system_behavior_mapper = {
    generic: {
      apply_layout: function(html) {_dtApplyGenericLayout(html)},
      load_dice: function() {return _dtLoadGenericDice()}
    }
  };

  // Define which behavior in the mapper to use
  CONFIG.DICETRAY.SYSTEM_MAP = system_behavior_mapper;
});

Hooks.once('ready', function() { });

Hooks.on('renderSidebarTab', (app, html, data) => {
  // Exit early if necessary;
  if (app.tabName !== 'chat') return;

  let formula_applier = null;
  const system_behavior_mapper = CONFIG.DICETRAY.SYSTEM_MAP;
  formula_applier = system_behavior_mapper['generic'];

  // Prepare the dice tray for rendering.
  let $chat_form = html.find('#chat-form');
  const template = 'modules/eon-dice-roller/templates/tray.html';
  const options = {
    dicerows: formula_applier.load_dice()
  };

  renderTemplate(template, options).then(c => {
    if (c.length > 0) {
      let $content = $(c);
      $chat_form.after($content);
      $content.find('.dice-tray__button').on('click', event => {
        event.preventDefault();
        let $self = $(event.currentTarget);
        let dataset = event.currentTarget.dataset;
        diceType = dataset.formula;

        _dtUpdateChatDice(dataset, 'add', html);
      });
      $content.find('.dice-tray__button').on('contextmenu', event => {
        event.preventDefault();
        let $self = $(event.currentTarget);
        let dataset = event.currentTarget.dataset;

        if (numberDices == 0) {
          diceType = "";
        }
        else {
          diceType = dataset.formula;
        }

        _dtUpdateChatDice(dataset, 'sub', html);
      });
      
      $content.find('.dice-tray__math').on('click', event => {
        event.preventDefault();
        let $self = $(event.currentTarget);
        let dataset = event.currentTarget.dataset;
        let mod_val = $('input[name="dice.tray.modifier"]').val();

        mod_val = Number(mod_val);
        mod_val = Number.isNaN(mod_val) ? 0 : mod_val;

        switch (dataset.formula) {
          case '+1':
            mod_val = mod_val + 1;
            break;

          case '-1':
            mod_val = mod_val - 1;

          default:
            break;
        }
        $('input[name="dice.tray.modifier"]').val(mod_val);
        _dtApplyModifier(html);
      });

      formula_applier.apply_layout(html);
    }
  });
});

function _dtUpdateChatDice(dataset, direction, html) {
  if (direction == 'add') {
    numberDices++;
  }
  if (direction == 'sub') {
    if (numberDices > 0) {
      numberDices--;
    }    
  }

  // Add a flag indicator on the dice.
  let $flag_button = html.find(`.dice-tray__flag--${dataset.formula}`);

  if (numberDices == '') {
    numberDices = direction == 'add' ? 1 : 0;
  }

  numberDices = Number(numberDices);

  if (numberDices > 0) {
    $flag_button.text(numberDices);
    $flag_button.removeClass('hide');
  }
  else if (numberDices < 0) {
    $flag_button.text(numberDices);
  }
  else {
    $flag_button.text('');
    $flag_button.addClass('hide');
  }
  
  _dtApplyModifier(html);
}

function _dtApplyModifier(html) {
  $mod_input = html.find('.dice-tray__input');
  mod_val = Number($mod_input.val());
  let mod_string = '';
  if ($mod_input.length > 0 && !Number.isNaN(mod_val)) {
    if (mod_val > 0) {
      mod_string = `+${mod_val}`;
    }
    else if (mod_val < 0) {
      mod_string = `${mod_val}`;
    }
  }

  // Existing modifier.
  if (mod_string.length > 0 || mod_string === '') {
    let $chat = html.find('#chat-form textarea');
    let chat_val = String($chat.val());

    let match_string = new RegExp('(\\+|\\-)([0-9]+)$');
    if (chat_val.match(match_string)) {
      chat_val = chat_val.replace(match_string, mod_string);
      $chat.val(chat_val);
    }
    else if (chat_val !== '') {
      chat_val = chat_val + mod_string;
      $chat.val(chat_val);
    }
  }

  return mod_string;
}

//----------------------------------
//Specific System Implementations
//----------------------------------

// LAYOUT BY SYSTEM
function _dtApplyGenericLayout(html) {  
  html.find('.dice-tray__roll').on('click', event => {
    event.preventDefault();
    rollDice(numberDices, diceType, obRoll);
    // Trigger the event.
    html.find('.dice-tray__input').val(0);
    html.find('.dice-tray__flag').text('');
    html.find('.dice-tray__flag').addClass('hide');    
    numberDices = 0;
    diceType = "";
  });
}

// DICE LOADING BY SYSTEM
function _dtLoadGenericDice() {
  return [
    {
      d6: 'd6',
      d10: 'd10',
      d100: 'd100'
    }
  ];
}

function rollDice(number, type, obRoll) {
	let canRoll = number > 0;
  let result = 0;
  let diceResult = [];
  let label = "";

  let numDices = number;
  let rolledDices = 0;

  while (numDices > rolledDices) {
    roll = new Roll("1" + type);
	  roll.evaluate({async:true});	
    
    roll.terms[0].results.forEach((dice) => {
      rolledDices += 1;

      if ((type == "d6") && (dice.result == 6) && (obRoll)) {
        numDices += 1;
        rolledDices -= 1;
      }
      else {
        result += parseInt(dice.result);
      }

      diceResult.push(dice.result);
    });
  }

	if (canRoll) {
		diceResult.forEach((dice) => {
      if ((type == "d6") && (dice == 6) && (obRoll)) {
        label += `<b>${dice}</b> `;
      }
      else {
			  label += `${dice} `;
      }
		});
	}

	roll.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: this.actor }),
		content: `<p>Slår ${number}${type}</p><p>${label}</p><p>Totalt: ${result}</p>`
	});

	return canRoll;
}