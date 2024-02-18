// client
onEvent('item.tooltip', tooltip => {
    tooltip.add(global.banidos, Text.red('BANIDO'))
})