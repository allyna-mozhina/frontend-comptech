const heartbeatAnimationDuration = () => ({
    restrict: 'A',
    scope: {
        heartbeatAnimationDuration: '@'
    },
    link(scope, element, attrs) {
        attrs.$observe('heartbeatAnimationDuration', (bpm) => element[0].style.animationDuration = 1 / (bpm / 60) + 's');
    }
});

export default heartbeatAnimationDuration;
