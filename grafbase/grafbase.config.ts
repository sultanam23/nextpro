import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
    name: g.string().length({ min: 2, max: 20 }),
    email: g.string().unique(),
    avaterUrl: g.url(),
    description: g.string().optional(),
    githubUrl: g.url(),
    linkedInUrl: g.url(),
    projects: g.relation(() => project).list().optional(),

})

const project = g.model('project', {
    title: g.string().length({ min: 2 }),
    description: g.string().optional(),
    image: g.string(),
    liveSiteUrl: g.url(),
    githubUrl: g.url(),
    category: g.string().search(),
    createdBy: g.relation(() => User)
})
export default config({
    schema: g
})
