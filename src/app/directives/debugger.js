/**
 * Simple model debugger
 * Usage example:
 *
 * <debugger model="$ctrl.category"></debugger>
 *
 * TODO ignore directive in PROD mode
 */
const dlpDebugger = () => ({
    restrict: 'E',
    scope: {
        model: '='
    },
    template: '<pre><code>{{model | json}}</code></pre>'
});

export default dlpDebugger;
