export class FilterPanel {
    constructor(options) {
        this.panelEl = document.createElement("div");
        this.panelEl.classList.add('filter-panel', 'glass')
        this.options = options || []
        this.render();
        this.bindEvents();
    }

    bindEvents() {
        this.searchEl.addEventListener("input", () => {
            this.emitChange();
        });

        this.sortEl.addEventListener("change", () => {
            this.emitChange();
        });
    }

    emitChange() {
        if (this.onChange) {
            this.onChange({
                search: this.searchEl.value.trim(),
                sort: this.sortEl.value,
            });
        }
    }

    searchInput() {
        this.searchEl = document.createElement('input')
        this.searchEl.type = 'search'
        this.searchEl.name = 'search'
        this.searchEl.placeholder = 'Search hero...'

        return this.searchEl
    }

    sortSelect() {
        this.sortEl = document.createElement('select')
        this.sortEl.name = 'filter'

        this.options.forEach(({ value, name }) => {
            const optoinEl = document.createElement('option')

            optoinEl.textContent = name
            optoinEl.value = value

            this.sortEl.append(optoinEl)
        })

        return this.sortEl;
    }

    render() {
        this.panelEl.append(
            this.searchInput(),
            this.sortSelect()
        );
    }
}