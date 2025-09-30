export class Tag {
    static readonly Angular = new Tag('Angular', 'red');
    static readonly React = new Tag('React', 'blue');
    static readonly Vue = new Tag('Vue', 'green');
    static readonly Svelte = new Tag('Svelte', 'orange');
    static readonly TypeScript = new Tag('TypeScript', 'cyan');
    static readonly JavaScript = new Tag('JavaScript', 'yellow');
    static readonly NodeJS = new Tag('NodeJS', 'lime');
    static readonly Python = new Tag('Python', 'violet');
    static readonly Django = new Tag('Django', 'forestgreen');
    static readonly Flask = new Tag('Flask', 'darkslategray');
    static readonly RubyOnRails = new Tag('Ruby on Rails', 'crimson');

    static readonly MongoDB = new Tag('MongoDB', 'darkgreen');
    static readonly AWS = new Tag('AWS', 'orange');
    static readonly MachineLearning = new Tag('Machine Learning', 'purple');
    static readonly SQL = new Tag('SQL', 'brown');
    static readonly HTML = new Tag('HTML', 'darkred');
    static readonly CSS = new Tag('CSS', 'darkblue');

    private constructor(private readonly key: string, public readonly color: string) {}

    toString() {
        return this.key;
    }
}
