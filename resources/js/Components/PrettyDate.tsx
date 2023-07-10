export default function PrettyDate({ date }: { date: string }) {
    const prettyDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return <span>{prettyDate}</span>;
}
