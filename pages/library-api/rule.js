import Link from 'next/link';
import ApiInfo from '../../components/ApiInfo';
import CodeAccordion from '../../components/CodeAccordion';
import ExampleUsageWrapper from '../../components/ExampleUsageWrapper';


const rulesFormCode = `ruleSet: [
    { rule: 'required', customMessage: 'This list should not be empty' },
    { rule: 'listSize', greaterThan: 2 },
],`;

const ruleParametersApiInfoList = [
    {
        label: 'rule (string || func)',
        desc: (
            <span>
                Identifier (name) of the rule to be run. (Can also be a{' '}
                <Link className="inner-link" href="/rules/custom-on-hook">
                    custom function
                </Link>
                )
            </span>
        ),
    },
    {
        label: 'equalTo, lessThan, lessThanOrEqualTo, greaterThan, greaterThanOrEqualTo, notEqualTo (any || function)',
        desc: (
            <span>
                Comparison identifier that can be used only by{' '}
                <Link className="inner-link" href="/rules/number">
                    number
                </Link>
                {', '}
                <Link className="inner-link" href="/rules/length">
                    length
                </Link>
                {', '}
                <Link className="inner-link" href="/rules/list-size">
                    listSize
                </Link>
                {' and '}
                <Link className="inner-link" href="/rules/date">
                    date
                </Link>{' '}
                rules.
            </span>
        ),
    },
    {
        label: 'onlyIntegers (boolean)',
        desc: (
            <span>
                Decides whether only integer are allowed that can be used only by{' '}
                <Link className="inner-link" href="/rules/number">
                    number
                </Link>{' '}
                rule.
            </span>
        ),
    },
    {
        label: 'withTime (boolean)',
        desc: (
            <span>
                Decides whether hours and minutes are taken into account that can be used only by{' '}
                <Link className="inner-link" href="/rules/date">
                    date
                </Link>{' '}
                rule.
            </span>
        ),
    },
    {
        label: (
            <div>
                applyToNulls (boolean){' '}
                <Link className="inner-link" href="/customizations/apply-to-nulls">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Decides whether the rule should also be run on null values.',
    },
    {
        label: (
            <div>
                disableIf (func){' '}
                <Link className="inner-link" href="/customizations/conditional-rules">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Disables running the rule if the return value of the function is truthy.',
    },
    {
        label: (
            <div>
                enableIf (func){' '}
                <Link className="inner-link" href="/customizations/conditional-rules">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Enables running the rule if the return value of the function is truthy.',
    },
    {
        label: (
            <div>
                customMessage (string || func){' '}
                <Link className="inner-link" href="/customizations/custom-message">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Function to override default error message for the rule.',
    },
];

const Rule = () => {
    return (
        <ExampleUsageWrapper header="Rule">
            <CodeAccordion code={rulesFormCode} />
            <div className="apiInfoSectionHeader">Rule Definition Parameters</div>
            <ApiInfo apiInfoList={ruleParametersApiInfoList} />
        </ExampleUsageWrapper>
    );
};

export default Rule;
