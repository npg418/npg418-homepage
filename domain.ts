import { daily } from 'deno-cron';

const url = Deno.env.get('DOMAIN_UPDATE_URL')
const credential = Deno.env.get('DOMAIN_UPDATE_CREDENTIAL')

if (url && credential) {
    daily(() => {
        ['4', '6'].forEach(v => {
            fetch(url.replace('{version}', v), {
                headers: {
                    Authorization: `Basic ${btoa(credential)}`
                }
            })
        })
    })
}
