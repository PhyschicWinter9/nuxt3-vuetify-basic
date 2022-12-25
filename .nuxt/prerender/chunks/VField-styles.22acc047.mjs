const VField = '.v-field{--v-field-padding-start:16px;--v-field-padding-end:16px;--v-field-padding-top:10px;--v-field-padding-bottom:6px;border-radius:4px;contain:layout;display:grid;flex:1 0;font-size:16px;grid-area:control;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;letter-spacing:.009375em;max-width:100%;position:relative}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{-webkit-padding-start:12px;padding-inline-start:12px}.v-field--appended{-webkit-padding-end:12px;padding-inline-end:12px}.v-field--variant-solo{background:rgb(var(--v-theme-surface));border-color:transparent;box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.12));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-filled,.v-input--density-default .v-field--variant-solo{--v-input-control-height:56px;--v-field-padding-bottom:6px}.v-input--density-comfortable .v-field--variant-filled,.v-input--density-comfortable .v-field--variant-solo{--v-input-control-height:48px;--v-field-padding-bottom:2px}.v-input--density-compact .v-field--variant-filled,.v-input--density-compact .v-field--variant-solo{--v-input-control-height:40px;--v-field-padding-bottom:-2px}.v-field--no-label,.v-field--single-line,.v-field--variant-outlined{--v-field-padding-top:0px}.v-input--density-default .v-field--no-label,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--variant-outlined{--v-field-padding-bottom:16px}.v-input--density-comfortable .v-field--no-label,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--variant-outlined{--v-field-padding-bottom:12px}.v-input--density-compact .v-field--no-label,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--variant-outlined{--v-field-padding-bottom:8px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start:0px;--v-field-padding-end:0px;--v-field-padding-top:6px;--v-field-padding-bottom:2px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height:48px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height:40px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height:32px}.v-field.v-field--prepended{--v-field-padding-start:6px}.v-field.v-field--appended{--v-field-padding-end:6px}.v-field__input{-webkit-padding-start:var(--v-field-padding-start);-webkit-padding-end:var(--v-field-padding-end);color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;min-height:var(--v-input-control-height,56px);opacity:var(--v-high-emphasis-opacity);padding-inline-end:var(--v-field-padding-end);padding-bottom:var(--v-field-padding-bottom,6px);padding-inline-start:var(--v-field-padding-start);padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));width:100%}.v-field__input input{letter-spacing:inherit}.v-field__input input::-moz-placeholder,input.v-field__input::-moz-placeholder,textarea.v-field__input::-moz-placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:active,.v-field__input:focus{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{align-items:flex-start;display:flex;flex:1 0;grid-area:field;position:relative}.v-field__prepend-inner{-webkit-padding-end:var(--v-field-padding-after);grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{-webkit-padding-start:var(--v-field-padding-after);grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{align-items:flex-start;display:flex;padding-top:var(--v-input-padding-top,10px)}.v-field--focused .v-field__append-inner,.v-field--focused .v-field__prepend-inner{opacity:1}.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon,.v-field__prepend-inner>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--error .v-field__clearable>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{-webkit-margin-start:4px;-webkit-margin-end:4px;cursor:pointer;margin-inline-end:4px;margin-inline-start:4px;opacity:0;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover:hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{-webkit-margin-start:var(--v-field-padding-start);-webkit-margin-end:var(--v-field-padding-end);contain:layout paint;margin-inline-end:var(--v-field-padding-end);margin-inline-start:var(--v-field-padding-start);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top,10px);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--error .v-label.v-field-label,.v-field--focused .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale:0.75em;font-size:var(--v-field-label-scale);max-width:100%;visibility:hidden}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{margin:0;transform:translateY(-16px)}.v-field--variant-outlined .v-label.v-field-label--floating{margin:0 4px;position:static;transform:translateY(-50%);transform-origin:center}.v-field__outline{--v-field-border-width:1px;--v-field-border-opacity:0.38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover:hover){.v-field:hover .v-field__outline{--v-field-border-opacity:var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity:1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width:2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);content:"";height:100%;left:0;opacity:var(--v-field-border-opacity);position:absolute;top:0;transition:opacity .25s cubic-bezier(.4,0,.2,1);width:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border:solid;border-width:0 0 2px;content:"";height:100%;left:0;position:absolute;top:0;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);width:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__end,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__start{border:0 solid;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width);border-top-width:var(--v-field-border-width);flex:0 0 12px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-radius:4px 0 0 4px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__notch{border-width:0 0 var(--v-field-border-width);flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__notch:before{content:"";height:100%;left:0;opacity:var(--v-field-border-opacity);position:absolute;top:0;transition:opacity .25s cubic-bezier(.4,0,.2,1);width:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{border-width:0 0 var(--v-field-border-width);bottom:0}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width);border-top-width:var(--v-field-border-width);flex:1}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-radius:4px 0 0 4px}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;border-radius:inherit;height:100%;left:0;opacity:.04;pointer-events:none;position:absolute;top:0;transition:opacity .25s cubic-bezier(.4,0,.2,1);width:100%}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover:hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc(var(--v-theme-overlay-multiplier)*.08)}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc(var(--v-theme-overlay-multiplier)*.16)}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{-o-border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}';

const VFieldStyles_22acc047 = [VField];

export { VFieldStyles_22acc047 as default };
//# sourceMappingURL=VField-styles.22acc047.mjs.map
